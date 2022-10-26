<script>
    import { fade, blur, scale, slide, fly } from "svelte/transition";

    let visible;
</script>

<h1>Hello Transition</h1>

<div>First Div</div>

<input type="checkbox" bind:checked={visible} /> Visible

{#if visible}
  <div transition:fly={{y: 200, x: 200}}>Second Div</div>
{/if}