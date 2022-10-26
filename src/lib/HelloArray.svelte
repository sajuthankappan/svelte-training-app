<script>
  let newCar;
  let cars = ['volvo', 'saab', 'mercedes', 'audi'];

  function handleAddClick() {
    console.debug('Add clicked');
    // cars.push(newCar);
    manipulateCars(cars);
    cars = cars;
    // cars = [...cars, newCar];
    console.debug({cars});
  }

  function manipulateCars(cars) {
    // lots of things happening here with complex logics.. :)
    cars.push(newCar);
  }
</script>

<h1>Hello Array</h1>

<input type="text" bind:value={newCar} />
<button on:click={handleAddClick}>Add</button>

{#each cars as car}
  <div>{car}</div>
{/each}