<script>
  let x = 10;
  let multiplier = 10;

  $: y = double(x);
  $: result = calculate(x, multiplier);
  $: console.debug(x);

  function handleIncrementClick() {
    x = x + 1;
  }

  function double(val) {
    console.debug('within double');
    return val * 2;
  }

  function calculate(num1, mul) {
    return num1 * mul;
  }
</script>

<h1>Reactive Statements</h1>

<button on:click={handleIncrementClick}>Increment</button>
<p>
  x: {x}
</p>
<p>
  y: {y}
</p>

Multiplier: <input type="number" bind:value={multiplier} />

<p>
  result: {result}
</p>
