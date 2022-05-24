<script lang="ts">
	import type { User } from '$lib/types';
	import { goto } from '$app/navigation';
	import user from '$lib/user';
	let email = '';
	let password = '';
	async function login() {
		const res = await fetch('http://localhost:1337/api/auth/local', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ identifier: email, password })
		});
		if (res.ok) {
			const data: { user: User; jwt: string } = await res.json();
			localStorage.setItem('token', data.jwt);
			if (data) {
				$user = data.user;
				goto('/');
			}
		} else {
			const data: { message: { messages: { message: string }[] }[] } = await res.json();
			if (data?.message?.[0]?.messages?.[0]?.message) {
				alert(data.message[0].messages[0].message);
			}
		}
	}
</script>

<p class="mt-24">hi</p>

<style lang="postcss">
	label {
		@apply font-bold block mb-1;
	}
	input {
		@apply bg-white w-full border border-gray-500 rounded outline-none py-2 px-4;
	}
	.submit {
		@apply bg-blue-500 text-white border-transparent rounded px-4 py-2;
	}
</style>
