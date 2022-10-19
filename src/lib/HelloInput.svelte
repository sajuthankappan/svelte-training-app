<script>
  let number1 = 0;
  let number2 = 0;
  let sum;

  const handleAddClick = () => {
    sum = number1 + number2;
  }
</script>

<div>
  <label for="number1">Number 1</label>
  <input type="number" id="number1" bind:value={number1}>
</div>

<div>
  <label for="number2">Number 2</label>
  <input type="number" id="number2" bind:value={number2}>
</div>

<button on:click={handleAddClick}>
  Add
</button>

<div>
  <label for="sum">Sum</label>
  <input type="text" id="sum" bind:value={sum}>
</div>

{number1 + number2}