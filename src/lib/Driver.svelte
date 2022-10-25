<script>
  import Car from './Car.svelte'

  $: spreaded = {...car, color: "white"};
  $: console.debug(spreaded)

  let car = {
    color: 'red',
    speed: 100
  }
</script>

<h1>Spread Props</h1>

<Car color={car.color} speed={car.speed} />

<Car {...car} />