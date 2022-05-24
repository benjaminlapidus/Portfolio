import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
    const res = await fetch('http://0.0.0.0:1337/api/posts?populate=*&sort=id:DESC')

    // const res = await fetch('http://localhost:1337/api/posts', { headers: { Authorization: `bearer XYZ123` } } )
	const data = await res.json();

	return { body: data };
}