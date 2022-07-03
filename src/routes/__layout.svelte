<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import { page } from '$app/stores';
	import '../app.scss';
	import Header from '$lib/header/Header.svelte';

	let activePath = $page.url.pathname;

	beforeUpdate(() => {
		activePath = $page.url.pathname;
	});
</script>

<div>
	<Header {activePath} />

	<main class="container">
		<slot />
	</main>
</div>

<style lang="scss">
</style>
