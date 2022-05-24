<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/posts?populate=*&sort=id:DESC');
		const data = await res.json();
		return { props: { posts: data.data } };
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types';
	import { goto } from '$app/navigation';
	let big = 'project-big';
	let small = 'project-small';
	export let posts: Post[];
</script>

<div class="container max-w-2xl px-6 lg:px-12 py-40 mx-auto lg:h-128 lg:py-42">
	<h1 class="text-8xl font-secondary accent-secondary lg:text-9xl">blog</h1>
	<p class="mt-12 lg:mt-16 px-1 text-2xl accent-primary leading-tight">
		This is my small corner of the internet where I'm sharing my thoughts about the digital, tech,
		and more.
	</p>

	<div class="py-20 mx-auto">
		{#each posts as post}
			<article>
				<small class="text-neutral-600"
					>{new Date(post.attributes.createdAt.split('T')[0]).toLocaleDateString()}</small
				>
				<a
					href="/blog/{post.attributes.Slug}"
					class="hover:underline no-underline decoration-violet-600 decoration-4 underline-offset-4"
					><h3 class="accent-secondary text-4xl my-1">{post.attributes.Title}</h3></a
				>
			</article>
			<div class="break-inside-avoid">
				<p class="mt-2 text-neutral-800 font-bold text-2xl mb-20">{post.attributes.Description}</p>
			</div>
		{/each}
	</div>
</div>
