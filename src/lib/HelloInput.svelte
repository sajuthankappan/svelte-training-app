<script>
  import { onMount } from "svelte";
    import PassScore from "./PassScore.svelte";

  let number1 = 0;
  let number2 = 0;
  let sum;
  let pass = false;
  let car;

  function handleAddClick() {
    sum = number1 + number2;
  }

  function handleCarChange() {
    console.debug(car);
    localStorage.setItem("car", car);
  }

  onMount(() => {
    const carStored = localStorage.getItem("car");

    if (carStored) {
      car = carStored;
    }
  })
</script>

<div>
  <label for="number1">Number 1</label>
  <input type="number" id="number1" bind:value={number1}>
</div>

<div>
  <label for="number2">Number 2</label>
  <input type="number" id="number2" bind:value={number2}>
</div>
{number1 + number2}

<button on:click={handleAddClick}>
  Add
</button>

<div>
  <label for="sum">Sum</label>
  <input type="text" id="sum" bind:value={sum}>
</div>

<div class="formControl">
  <label>
    <input type="checkbox" id="pass" bind:checked={pass}>
    Pass?
  </label>
  
  Pass: {pass}

  {#if pass}
  <PassScore />
  {/if}
</div>


<label for="cars">Choose a car:</label>

<select name="cars" id="cars" bind:value={car} on:change={handleCarChange}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

Car Selected: {car}

<style>
  .formControl {
    padding: 2rem;
  }
</style>