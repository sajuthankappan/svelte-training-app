<script>
  import FancyLabel from './FancyLabel.svelte';
  import FancyProgress from './FancyProgress.svelte';

  let name = "Saju new";
  let progress = 0

  const increment = () => {
    progress += 1
  }
</script>

<div>Hello {name}</div>

<p>this is a paragraph</p>

<button on:click={increment}>
  Increment
</button>

count is {progress}

<FancyProgress progress={progress} name="newval" />
<FancyLabel name={"myname"} />
