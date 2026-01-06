import { NextRequest, NextResponse } from 'next/server'

// Validation constants
const MAX_DESCRIPTION_LENGTH = 5000
const MAX_SCREENSHOTS = 3
const MAX_BASE64_SIZE = 7 * 1024 * 1024 // ~5MB file in base64
const VALID_TYPES = ['bug', 'feature', 'general'] as const
const VALID_IMAGE_PREFIXES = ['data:image/png', 'data:image/jpeg', 'data:image/jpg', 'data:image/gif', 'data:image/webp']

type FeedbackType = typeof VALID_TYPES[number]

interface FeedbackRequest {
  type: FeedbackType
  description: string
  page: string
  screenshots: string[]
}

type ValidationResult =
  | { valid: true; data: FeedbackRequest }
  | { valid: false; error: string }

function validateFeedbackRequest(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Invalid request body' }
  }

  const { type, description, page, screenshots } = body as Record<string, unknown>

  // Validate type
  if (!type || typeof type !== 'string' || !VALID_TYPES.includes(type as FeedbackType)) {
    return { valid: false, error: 'Invalid feedback type. Must be bug, feature, or general.' }
  }

  // Validate description
  if (!description || typeof description !== 'string' || description.trim().length === 0) {
    return { valid: false, error: 'Description is required' }
  }
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    return { valid: false, error: `Description exceeds ${MAX_DESCRIPTION_LENGTH} characters` }
  }

  // Validate page
  if (!page || typeof page !== 'string') {
    return { valid: false, error: 'Page is required' }
  }
  // Sanitize page to prevent path injection
  if (page.includes('..') || page.includes('<') || page.includes('>')) {
    return { valid: false, error: 'Invalid page path' }
  }

  // Validate screenshots
  if (!Array.isArray(screenshots)) {
    return { valid: false, error: 'Screenshots must be an array' }
  }
  if (screenshots.length > MAX_SCREENSHOTS) {
    return { valid: false, error: `Maximum ${MAX_SCREENSHOTS} screenshots allowed` }
  }

  for (const screenshot of screenshots) {
    if (typeof screenshot !== 'string') {
      return { valid: false, error: 'Invalid screenshot format' }
    }
    if (screenshot.length > MAX_BASE64_SIZE) {
      return { valid: false, error: 'Screenshot file too large (max 5MB)' }
    }
    if (!VALID_IMAGE_PREFIXES.some(prefix => screenshot.startsWith(prefix))) {
      return { valid: false, error: 'Invalid image type. Allowed: PNG, JPEG, GIF, WebP' }
    }
  }

  return {
    valid: true,
    data: {
      type: type as FeedbackType,
      description: description.trim(),
      page: page as string,
      screenshots: screenshots as string[]
    }
  }
}

// Sanitize text for markdown to prevent injection
function sanitizeForMarkdown(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\[([^\]]*)\]\(javascript:/gi, '[$1](blocked:')
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json()
    const validation = validateFeedbackRequest(rawBody)

    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { type, description, page, screenshots } = validation.data

    const githubToken = process.env.GITHUB_TOKEN
    const githubRepo = process.env.GITHUB_REPO
    const githubImagesRepo = process.env.GITHUB_IMAGES_REPO || githubRepo

    if (!githubToken) {
      console.error('GitHub token not configured')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      )
    }

    if (!githubRepo) {
      console.error('GitHub repo not configured')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
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

      // Upload to public GitHub images repo
      const uploadResponse = await fetch(
        `https://api.github.com/repos/${githubImagesRepo}/contents/${filename}`,
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
        // Use the raw GitHub URL for the image (from public images repo)
        screenshotUrls.push(`https://raw.githubusercontent.com/${githubImagesRepo}/main/${filename}`)
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
**Page:** \`${sanitizeForMarkdown(page)}\`
**Submitted:** ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })}

## Description

${sanitizeForMarkdown(description)}${screenshotsSection}

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
