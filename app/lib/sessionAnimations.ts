/**
 * Session-based animation state management
 * Tracks which pages have been visited during the current browser session
 * to prevent repetitive fade-in animations on return navigation
 */

const STORAGE_KEY = 'ulu-spa-visited-pages'

/**
 * Check if code is running in browser environment
 */
const isBrowser = typeof window !== 'undefined'

/**
 * Get the list of visited pages from sessionStorage
 */
function getVisitedPages(): string[] {
  if (!isBrowser) return []

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading visited pages from sessionStorage:', error)
    return []
  }
}

/**
 * Save the list of visited pages to sessionStorage
 */
function saveVisitedPages(pages: string[]): void {
  if (!isBrowser) return

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pages))
  } catch (error) {
    console.error('Error saving visited pages to sessionStorage:', error)
  }
}

/**
 * Check if a page has been visited during this session
 * @param pathname - The page path to check (e.g., '/', '/services', '/memberships')
 * @returns true if the page has been visited, false otherwise
 */
export function hasPageBeenVisited(pathname: string): boolean {
  const visited = getVisitedPages()
  return visited.includes(pathname)
}

/**
 * Mark a page as visited in the current session
 * @param pathname - The page path to mark as visited
 */
export function markPageVisited(pathname: string): void {
  const visited = getVisitedPages()

  // Only add if not already in the list
  if (!visited.includes(pathname)) {
    visited.push(pathname)
    saveVisitedPages(visited)
  }
}

/**
 * Clear all visited pages from sessionStorage
 * Useful for testing or debugging
 */
export function clearVisitedPages(): void {
  if (!isBrowser) return

  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing visited pages from sessionStorage:', error)
  }
}

/**
 * Get all visited pages (for debugging)
 */
export function getVisitedPagesList(): string[] {
  return getVisitedPages()
}
