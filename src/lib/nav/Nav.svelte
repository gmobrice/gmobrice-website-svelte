<script lang="ts">
	import { navigationLinks } from './data';
	import { getLinkStyles, getButtonStyles } from './styles';

	// props
	export let isSmallerNav: boolean;
	export let activePath: string;
</script>

<nav>
	<ul class="flex space-x-6">
		{#each navigationLinks as { id, name, href } (id)}
			<li class="list-none">
				<a class={getLinkStyles(isSmallerNav, activePath, href)} {href}>
					{name}
				</a>
			</li>
		{/each}
		<li class="list-none">
			<a class={getButtonStyles(isSmallerNav)} href="mailto:gmobrice@outlook.com">
				<span class="mr-1">✉️</span>
				Contact me!
			</a>
		</li>
	</ul>
</nav>
