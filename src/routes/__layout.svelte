<script lang="ts">
	import '../app.scss';
	import Header from '$lib/header/Header.svelte';
</script>

<div>
	<Header />

	<main class="container">
		<slot />
	</main>
</div>

<style lang="scss">
</style>
