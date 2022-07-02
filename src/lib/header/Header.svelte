<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import ProfilePic from '$lib/assets/images/profile-pic-200.jpeg';

	let isSmallerSize: boolean = false;
	let scrollPosition = 0;
	const scrollThreshold = 60;

	const defaultHeaderStyle =
		'bg-slate-800 bg-opacity-95 backdrop-blur-sm backdrop-saturate-200 drop-shadow-sm duration-200';

	const fullSizedHeaderStyle = `${defaultHeaderStyle} pt-8 pb-6 border-b-2 border-slate-900`;
	const smallerHeaderStyle = `${defaultHeaderStyle} pt-3 pb-3`;

	beforeUpdate(() => {
		isSmallerSize = scrollPosition >= scrollThreshold;
	});
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header class="sticky top-0 h-32 mb-10">
	<div class={isSmallerSize ? smallerHeaderStyle : fullSizedHeaderStyle}>
		<div class="container flex items-center justify-between">
			{#if isSmallerSize}
				<a href="/" class="flex justify-center items-center">
					<img class="w-8 h-8 rounded-full" src={ProfilePic} alt="Gustavo Mobrice" />
					<span class="flex items-center ml-4">
						<span class="text-slate-50 text-sm font-semibold">Gustavo Mobrice</span>
						<span class="text-slate-300 text-xs ml-2">software engineer @ microsoft ireland</span>
					</span>
				</a>
			{:else}
				<a href="/" class="flex justify-center items-center">
					<img class="w-14 h-14 rounded-full" src={ProfilePic} alt="Gustavo Mobrice" />
					<span class="flex flex-col ml-4">
						<span class="text-slate-50 text-xl font-semibold">Gustavo Mobrice</span>
						<span class="text-slate-300 text-sm">software engineer @ microsoft ireland</span>
					</span>
				</a>
			{/if}
			<Nav isSmallerNav={isSmallerSize} />
		</div>
	</div>
</header>

<style lang="scss">
</style>
