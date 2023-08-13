import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  if (request.url.startsWith('http://hello.localhost:5173/')) { 
  request = new Request(
      request.url.replace('http://hello.localhost:5173/', 'https://localhost:5173/hello'),
      request,   
    )    
  }  
  return fetch(request);
};