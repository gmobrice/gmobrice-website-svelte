<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import ProfilePic from '$lib/assets/images/profile-pic-200.jpeg';
	import { scrollThreshold } from './data';
	import {
		getHeaderStyles,
		getImageStyles,
		getNameContainerStyles,
		getNameStyles,
		getSubtitleStyles
	} from './styles';

	// state
	let isSmallerSize = false;
	let scrollPosition = 0;

	//props
	export let activePath: string;

	beforeUpdate(() => {
		isSmallerSize = scrollPosition >= scrollThreshold;
	});
</script>

<svelte:window bind:scrollY={scrollPosition} />

<header class="sticky top-0 h-32 mb-10">
	<div class={getHeaderStyles(isSmallerSize)}>
		<div class="container flex items-center justify-between">
			<a href="/" class="flex justify-center items-center">
				<img class={getImageStyles(isSmallerSize)} src={ProfilePic} alt="Gustavo Mobrice" />
				<span class={getNameContainerStyles(isSmallerSize)}>
					<span class={getNameStyles(isSmallerSize)}>Gustavo Mobrice</span>
					<span class={getSubtitleStyles(isSmallerSize)}>
						software engineer @ microsoft ireland
					</span>
				</span>
			</a>
			<Nav {activePath} isSmallerNav={isSmallerSize} />
		</div>
	</div>
</header>
