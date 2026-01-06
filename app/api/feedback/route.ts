import { NextRequest, NextResponse } from 'next/server'

interface FeedbackRequest {
  type: 'bug' | 'feature' | 'general'
  description: string
  page: string
  screenshots: string[] // base64 encoded images
}

export async function POST(request: NextRequest) {
  try {
    const body: FeedbackRequest = await request.json()
    const { type, description, page, screenshots } = body

    const githubToken = process.env.GITHUB_TOKEN
    const githubRepo = process.env.GITHUB_REPO

    if (!githubToken) {
      console.error('GitHub token not configured')
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      )
    }

    if (!githubRepo) {
      console.error('GitHub repo not configured')
      return NextResponse.json(
        { error: 'GitHub repo not configured' },
        { status: 500 }
      )
    }

    // Upload screenshots to GitHub and get URLs
    const screenshotUrls: string[] = []

    for (let i = 0; i < screenshots.length; i++) {
      const base64Data = screenshots[i]
      // Extract the actual base64 content (remove data:image/xxx;base64, prefix)
      const base64Content = base64Data.split(',')[1]
      const mimeType = base64Data.split(';')[0].split(':')[1]
      const extension = mimeType.split('/')[1] || 'png'

      // Generate a unique filename
      const timestamp = Date.now()
      const filename = `feedback/${timestamp}-${i}.${extension}`

      // Upload to GitHub repo (in a feedback-images branch or main)
      const uploadResponse = await fetch(
        `https://api.github.com/repos/${githubRepo}/contents/${filename}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Add feedback screenshot ${timestamp}-${i}`,
            content: base64Content,
            branch: 'main', // or create a dedicated branch for feedback images
          }),
        }
      )

      if (uploadResponse.ok) {
        // Use the raw GitHub URL for the image
        screenshotUrls.push(`https://raw.githubusercontent.com/${githubRepo}/main/${filename}`)
      } else {
        console.error('Failed to upload screenshot:', await uploadResponse.text())
      }
    }

    // Format the issue
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1)
    const issueTitle = `[${typeCapitalized}] Feedback from ${page}`

    const screenshotsSection =
      screenshotUrls.length > 0
        ? `\n\n## Screenshots\n${screenshotUrls.map((url, i) => `![Screenshot ${i + 1}](${url})`).join('\n')}`
        : ''

    const issueBody = `## Feedback Details

**Type:** ${typeCapitalized}
**Page:** \`${page}\`
**Submitted:** ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })}

## Description

${description}${screenshotsSection}

---
*Submitted via ULU Spa feedback widget*`

    // Create the GitHub issue
    const issueResponse = await fetch(
      `https://api.github.com/repos/${githubRepo}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody,
          labels: ['feedback', type],
        }),
      }
    )

    if (!issueResponse.ok) {
      const errorText = await issueResponse.text()
      console.error('GitHub API error:', {
        status: issueResponse.status,
        statusText: issueResponse.statusText,
        error: errorText,
      })
      return NextResponse.json(
        { error: `GitHub API error: ${issueResponse.statusText}` },
        { status: issueResponse.status }
      )
    }

    const issue = await issueResponse.json()

    return NextResponse.json({
      success: true,
      issueNumber: issue.number,
      issueUrl: issue.html_url,
    })
  } catch (error) {
    console.error('Feedback submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    )
  }
}
