<!-- src/routes/__layout.svelte -->
<script lang="ts">
	import '../app.css';
	import '../fonts.css';
	import userStore from '$lib/user';
	import type { User } from '$lib/types';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	let loading = true;
	onMount(async () => {
		// Check if 'token' exists in localStorage
		if (!localStorage.getItem('token')) {
			loading = false;
			return { props: { user: null } };
		}
		// Fetch the user from strapi
		const res = await fetch('http://localhost:1337/api/auth/me', {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
		});
		const user: User = await res.json();
		loading = false;
		if (res.ok) {
			$userStore = user;
		}
	});
</script>

{#if !loading}
	<Navbar />
	<slot />
	<Footer />
{/if}
