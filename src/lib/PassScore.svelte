<script>
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    console.debug('on mount');
  })

  onDestroy(() => {
    console.debug('on destroy');
  })
</script>

Pass Score: 
<input type="number" />