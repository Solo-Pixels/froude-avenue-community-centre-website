/**
 * Route handler for serviceWorker.js requests
 * This prevents 404 errors from browser extensions or cached service workers
 * that automatically check for service worker files
 */
export async function GET() {
  // Return 204 No Content to indicate no service worker is available
  // This is cleaner than a 404 and tells the browser/extension to stop checking
  return new Response(null, {
    status: 204,
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
