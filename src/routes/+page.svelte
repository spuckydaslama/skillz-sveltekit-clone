<script lang="ts">
	import type { Employee } from '$lib/types';
	import Card from '$lib/components/Card.svelte';
	export let data: { employees: Employee[] };
</script>

<div class="text-blue-500 text-xl font-semibold mb-8">Frontend</div>
<div class="grid grid-cols-4 auto-rows-fr gap-4">
	{#each data.employees as employee, index}
		<Card id={index} {employee} />
	{/each}
</div>
