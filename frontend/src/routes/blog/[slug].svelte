<!-- src/routes/blog/[id].svelte -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch }) => {
		// Now, we'll fetch the blog post from Strapi
		const res = await fetch(
			`http://0.0.0.0:1337/api/posts?populate=*&filters[slug]=${params.slug}`
		);
		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with slug ${params.slug} was not found`);
			return { status: 404, error };
		} else {
			const response = await res.json();
			return { props: { post: response.data[0] } };
		}
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types';
	import { onMount } from 'svelte';
	import BlogFooter from '$lib/BlogFooter.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let post: Post;
	const source = post.attributes.Content;
	onMount(async () => {});
</script>

<div
	class="mt-16 h-96 bg-cover bg-center p-8"
	style="background-image: url('http://localhost:1337{post.attributes.Cover.data.attributes.formats
		.medium.url}')"
/>

<div class="container max-w-2xl px-6 lg:px-12 py-16 mx-auto lg:h-128 lg:py-42">
	<small class="text-neutral-600"
		>{new Date(post.attributes.createdAt.split('T')[0]).toLocaleDateString()}</small
	>
	<h1 class="text-8xl font-secondary accent-primary lg:text-6xl">{post.attributes.Title}</h1>
	<div class="mt-12 text-xl font-normal">
		<SvelteMarkdown {source} />
	</div>
	<BlogFooter />
</div>
