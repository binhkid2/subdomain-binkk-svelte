import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  if (request.url.startsWith('http://hello.subdomain-binkk-svelte.vercel.app/')) { 
  request = new Request(
      request.url.replace('http://hello.subdomain-binkk-svelte.vercel.app/', 'https://subdomain-binkk-svelte.vercel.app/hello'),
      request,   
    )    
  }  
  return fetch(request);
};