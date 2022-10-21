<script>
  import InnerComponent from "./InnerComponent.svelte";
  let someValue = "some value";

</script>

Binding Across Components

<input type="text" bind:value={someValue} />

<p>
  {someValue}
</p>

<InnerComponent bind:value={someValue} />
