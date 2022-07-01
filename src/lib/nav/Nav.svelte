<script lang="ts">
	import { navigationLinks } from './data';
</script>

<nav>
	<ul class="flex space-x-6">
		{#each navigationLinks as { id, name, href } (id)}
			<li class="list-none">
				<a {href} class="text-gray-500 hover:text-blue-500 hover:underline">
					{name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
</style>
