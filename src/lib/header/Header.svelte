<script lang="ts">
	import Nav from '$lib/nav/Nav.svelte';
	import ProfilePic from '$lib/assets/images/profile-pic-200.jpeg';
</script>

<header
	class="sticky top-0 pt-8 pb-6 mb-10 bg-slate-800 bg-opacity-95 backdrop-blur-sm backdrop-saturate-200 border-b-2 border-slate-900 drop-shadow-sm"
>
	<div class="container flex items-center justify-between">
		<a href="/" class="flex justify-center items-center">
			<img class="w-14 h-14 rounded-full" src={ProfilePic} alt="Gustavo Mobrice" />
			<span class="flex flex-col ml-4">
				<span class="text-slate-50 text-xl font-semibold">Gustavo Mobrice</span>
				<span class="text-slate-300 text-sm">software engineer @ microsoft ireland</span>
			</span>
		</a>
		<Nav />
	</div>
</header>

<style lang="scss">
</style>
