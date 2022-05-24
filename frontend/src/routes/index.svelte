<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/projects?populate=*&sort=id:ASC');
		const data = await res.json();
		return { props: { projects: data.data } };
	};
</script>

<script lang="ts">
	import type { Project } from '$lib/types';
	import { goto } from '$app/navigation';
	let big = 'project-big';
	let small = 'project-small';
	export let projects: Project[];
</script>

<div class="container px-6 lg:px-12 py-40 mx-auto lg:h-128 lg:py-42">
	<div class="flex flex-col w-full lg:flex-row lg:w-1/2">
		<div class="max-w-lg">
			<h1 class="text-8xl font-secondary accent-primary lg:text-9xl">Ben Lapidus</h1>
			<p class="mt-12 lg:mt-16 px-1 text-2xl lg:text-4xl accent-secondary">front-end developer</p>
		</div>
	</div>

	<!-- <div class="container mx-auto mt-4">
	{#each projects as project}
		<h4 class="font-bold">{project.attributes.Title}</h4>
		<p class="mt-2 text-gray-800">{project.attributes.Description}</p>
	{/each}
</div> -->

	<div class="relative flex flex-col justify-center pt-28">
		<div
			class="md:columns-1 lg:columns-2 gap-16 [column-fill:_balance] box-border before:box-inherit after:box-inherit"
		>
			{#each projects as project}
				<a href="./projects/{project.attributes.Slug}">
					<div class="break-inside-avoid">
						<div
							class="bg-cover bg-center p-8 mb-3 rounded-lg {project.attributes.isBig
								? big
								: small}"
							style="background-image: url('http://localhost:1337{project.attributes.Cover.data
								.attributes.formats.medium.url}')"
						/>
						<h3 class="accent-primary text-3xl mb-20">
							{project.attributes.Title}
						</h3>
					</div>
				</a>
				<!-- <h4 class="font-bold">{project.attributes.Title}</h4>
		<p class="mt-2 text-gray-800">{project.attributes.Description}</p> -->
			{/each}
		</div>
	</div>
</div>
