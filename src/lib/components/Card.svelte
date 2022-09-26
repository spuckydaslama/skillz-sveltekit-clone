<script lang="ts">
	import type { Employee } from '$lib/types';

	export let id: number;
	export let employee: Employee;
	$: skills = employee?.mainSkills
		?.replace(/ /g, '')
		.split(',')
		.filter((a) => a);
</script>

<a
	class="flex flex-col cursor-pointer transform-gpu transition duration-200 hover:-translate-y-1 "
	href={`employees/${id}`}
>
	<div
		class="w-32 h-32 relative mx-auto rounded-full hover:outline outline-offset-2 outline-blue-500 overflow-hidden"
	>
		{#if id!==undefined}
			<img
				class="object-cover w-0 h-0 absolute max-h-full max-w-full min-w-full min-h-full"
				src={`/placeholder-${id}.jpg`}
				alt={employee.name}
			/>
		{/if}
	</div>
	<div class="flex flex-col grow bg-white shadow-lg rounded-lg p-4 pt-20 -mt-16">
		<div class="text-center text-xl font-semibold">{employee.name}</div>
		<div class="text-center text-xs text-slate-400 mt-2 mb-3 grow">
			{employee.education}
		</div>
		<div class="flex flex-wrap justify-center gap-2">
			{#each skills as skill, index (index)}
				<div class="text-xs font-semibold rounded-full bg-amber-200 py-1 px-2">
					{skill}
				</div>
			{/each}
		</div>
	</div>
</a>
