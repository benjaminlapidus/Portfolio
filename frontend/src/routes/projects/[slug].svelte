<!-- src/routes/blog/[id].svelte -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch }) => {
		// Now, we'll fetch the blog post from Strapi
		const res = await fetch(
			`http://0.0.0.0:1337/api/projects?populate=*&filters[slug]=${params.slug}`
		);
		// A 404 status means "NOT FOUND"
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with slug ${params.slug} was not found`);
			return { status: 404, error };
		} else {
			const response = await res.json();
			return { props: { project: response.data[0] } };
		}
	};
</script>

<script lang="ts">
	import type { Project } from '$lib/types';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import user from '$lib/user';
	import SvelteMarkdown from 'svelte-markdown';
	export let project: Project;
	const source = project.attributes.Content;
	onMount(async () => {});
</script>

<div
	class="mt-16 h-96 bg-cover bg-center p-8"
	style="background-image: url('http://localhost:1337{project.attributes.Cover.data.attributes
		.formats.medium.url}')"
/>
<div class="container px-6 lg:px-56 py-20 mx-auto lg:h-128 lg:py-42">
	<h1 class="capitalize break-word mb-20 leading-tight">{project.attributes.Title}</h1>
	<div class="flex flex-wrap -mx-6 overflow-hidden mb-4 md:-mx-4 lg:-mx-6 xl:-mx-12">
		<div
			class="my-6 px-6 w-full overflow-hidden md:my-4 md:px-4 lg:my-6 lg:px-6 lg:w-1/3 xl:my-12 xl:px-12 xl:w-1/3"
		>
			<h3>Timeline</h3>
			<div class="text-gray-800 font-medium">{@html project.attributes.timePeriod}</div>
		</div>

		<div
			class="my-6 px-6 w-full overflow-hidden md:my-4 md:px-4 lg:my-6 lg:px-6 lg:w-1/3 xl:my-12 xl:px-12 xl:w-1/3"
		>
			<h3>Role</h3>
			<div class="text-gray-800 font-medium">{@html project.attributes.Role}</div>
		</div>

		<div
			class="my-6 px-6 w-full overflow-hidden md:my-4 md:px-4 lg:my-6 lg:px-6 lg:w-1/3 xl:my-12 xl:px-12 xl:w-1/3"
		>
			<h3>Skills</h3>
			<div class="text-gray-800 font-medium">{@html project.attributes.Tags}</div>
		</div>
	</div>
	<h2
		class="pb-10 mb-10 text-3xl border border-x-0 border-t-0 font-bolder border-gray-700 leading-9"
	>
		{@html project.attributes.Description}
	</h2>
	<div class="mt-12 text-xl font-normal">
		<SvelteMarkdown {source} />
	</div>
</div>
