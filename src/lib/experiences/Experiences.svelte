<script lang="ts">
	import Timeline from '$lib/timeline/Timeline.svelte';
	import { experiences } from './data';
</script>

<section>
	<Timeline experiences={experiences.reverse()} />
</section>
