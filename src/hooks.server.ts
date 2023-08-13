export async function handle({ event, resolve }) {
  // if hostname starts with "hello."
  if (event.url.hostname.startsWith('hello.')) {
    try {
      // Try to fetch the desired URL
      const response = await fetch('http://localhost:5173/hello');
      return response;
    } catch (error) {
      // If fetch fails, try the fallback URLs
      const fallbackUrls = [
        "https://subdomain-binkk-svelte.vercel.app/hello",
        "https://bisite.click/hello"
      ];

      for (const url of fallbackUrls) {
        try {
          const response = await fetch(url);
          return response;
        } catch (error) {
          // Fetch failed, continue to the next fallback URL
          continue;
        }
      }

      // All fetch attempts failed, return an error response
      return new Response('Failed to fetch any URL', { status: 500 });
    }
  }

  // otherwise use the default behavior
  return resolve(event);
}
