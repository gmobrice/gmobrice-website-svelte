<script lang="ts">
	import type { Experience } from '$lib/types';
	import {
		getTimelineStyles,
		getExperienceWrapperStyles,
		getExperienceButtonStyles,
		getExperienceLabelStyles
	} from './styles';

	// props
	export let experiences: Array<Experience> = [];
</script>

<div>
	<div id="timeline" class={getTimelineStyles()}>
		{#each experiences as experience (experience.id)}
			<div class={getExperienceWrapperStyles()}>
				<div class={getExperienceButtonStyles()}>
					{experience.countryFlag}
				</div>
				<div class={getExperienceLabelStyles()}>
					<span class="font-semibold mr-1 text-slate-600">{experience.startYear}</span>
					<span class="text-slate-800">{experience.company}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
