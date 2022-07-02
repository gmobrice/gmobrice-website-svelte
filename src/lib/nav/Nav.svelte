<script lang="ts">
	import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';
	import { navigationLinks } from './data';
	import { getLinkStyle, getButtonStyle } from './styles';

	// props
	export let isSmallerNav: boolean;

	// state
	let activePath = $page.url.pathname;

	beforeUpdate(() => {
		activePath = $page.url.pathname;
	});
</script>

<nav>
	<ul class="flex space-x-6">
		{#each navigationLinks as { id, name, href } (id)}
			<li class="list-none">
				<a class={getLinkStyle(isSmallerNav, activePath, href)} {href}>
					{name}
				</a>
			</li>
		{/each}
		<li class="list-none">
			<a class={getButtonStyle(isSmallerNav)} href="mailto:gmobrice@outlook.com">
				<span class="mr-1">✉️</span>
				Contact me!
			</a>
		</li>
	</ul>
</nav>
