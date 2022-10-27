<script>
  import StoreChild from "./StoreChild.svelte";
  import { count, setCount2, count2 } from "./store";

  let value = 10;

  function handleIncrementClick() {
    value = value + 1;
    count.set(value);
    setCount2(value);
  }
</script>

<h1>Store Example</h1>

Value:<input bind:value />
<button on:click={handleIncrementClick}>Increment</button>

Value:{value}

<StoreChild />
