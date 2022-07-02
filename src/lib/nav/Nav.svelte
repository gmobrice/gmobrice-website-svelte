<script lang="ts">
	import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';
	import { navigationLinks } from './data';

	export let isSmallerNav: boolean;

	let activePath = $page.url.pathname;
	const linkStyle = 'text-slate-50 hover:text-sky-300 duration-100 hover:ease-in';
	const mailEmoji = '✉️';

	beforeUpdate(() => {
		activePath = $page.url.pathname;
	});
</script>

<nav>
	{#if isSmallerNav}
		<span class="text-white">small nav</span>
	{:else}
		<ul class="flex space-x-6">
			{#each navigationLinks as { id, name, href } (id)}
				{@const currentLinkStyle =
					href === activePath
						? `${linkStyle} font-semibold text-sky-400 hover:text-sky-400`
						: linkStyle}

				<li class="list-none">
					<a class={currentLinkStyle} {href}>
						{name}
					</a>
				</li>
			{/each}
			<li class="list-none">
				<a
					class="py-3 px-6 rounded-full bg-rose-500 text-slate-50 text-sm duration-100 hover:bg-rose-600 hover:ease-in active:bg-rose-800 active:ease-in"
					href="mailto:gmobrice@outlook.com"
				>
					<span class="mr-1">{mailEmoji}</span>
					Contact me!
				</a>
			</li>
		</ul>
	{/if}
</nav>
