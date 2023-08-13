

export async function handle({ event, resolve }) {
  // if route matches "/banana" return banana
  if (event.url.hostname.startsWith('hello.')) {
    return fetch('http://localhost:5173/hello' || "https://subdomain-binkk-svelte.vercel.app/hello")
  }

  // otherwise use the default behavior
  return resolve(event)
}
