<script lang="ts">
	const links = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<nav>
	<ul class="flex space-x-6">
		{#each links as { name, href } (name)}
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
