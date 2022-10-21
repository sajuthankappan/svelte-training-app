<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  let value;

  function handleOkClick() {
    dispatch('ok', {
      value: value,
    })
  }

  function handleCancelClick() {
    dispatch('cancel', {
      
    })
  }
</script>

<div class="dialog">
  <h3>Hello Dispatch Child</h3>

  <input type="number" bind:value={value} />

  <button on:click={handleOkClick} >Ok</button>
  <button on:click={handleCancelClick} >Cancel</button>
</div>

<style>
  .dialog {
    border: solid;
    border-color: red;
    padding: 1rem;
  }
</style>