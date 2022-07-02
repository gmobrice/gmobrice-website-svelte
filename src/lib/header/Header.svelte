<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import ProfilePic from '$lib/assets/images/profile-pic-200.jpeg';
	import { scrollThreshold } from './data';
	import {
		getHeaderStyle,
		getImageStyle,
		getNameContainerStyle,
		getNameStyle,
		getSubtitleStyle
	} from './styles';

	// state
	let isSmallerSize = false;
	let scrollPosition = 0;

	beforeUpdate(() => {
		isSmallerSize = scrollPosition >= scrollThreshold;
	});
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header class="sticky top-0 h-32 mb-10">
	<div class={getHeaderStyle(isSmallerSize)}>
		<div class="container flex items-center justify-between">
			<a href="/" class="flex justify-center items-center">
				<img class={getImageStyle(isSmallerSize)} src={ProfilePic} alt="Gustavo Mobrice" />
				<span class={getNameContainerStyle(isSmallerSize)}>
					<span class={getNameStyle(isSmallerSize)}>Gustavo Mobrice</span>
					<span class={getSubtitleStyle(isSmallerSize)}>
						software engineer @ microsoft ireland
					</span>
				</span>
			</a>
			<Nav isSmallerNav={isSmallerSize} />
		</div>
	</div>
</header>
