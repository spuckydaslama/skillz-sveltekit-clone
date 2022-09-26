<script>
	import '../app.postcss';
	import MainNavigation from '$lib/components/MainNavigation.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	export let data;
</script>

<div class="min-h-screen bg-slate-50">
	<MainNavigation />
	<main class="sm:container relative mx-auto p-8">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>
</div>
