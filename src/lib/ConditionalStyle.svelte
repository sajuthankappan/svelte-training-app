<script>
  let age = 20;
  // $: childClass = age >= 18 ? 'adult' : 'child';
</script>

<h1>Conditional Style</h1>

<div class:child={age < 18}>This is red color</div>

Age: <input type="number child" bind:value={age} />

<style>
  .child {
    color: red;
    border: solid 1px;
    border-color: red;
  }
</style>