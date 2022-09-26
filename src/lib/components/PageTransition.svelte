<script>
    import { fly } from 'svelte/transition';
    export let pathname = '';
</script>

{#key pathname}
    <div in:fly={{ x: -5, duration: 250, delay: 150 }} out:fly={{ x: 5, duration: 150 }}>
        <slot />
    </div>
{/key}
