<script>
  let data;
  let isLoading;
  let error;

  // For more info on fetch api: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  async function handleInfoClick() {
    isLoading = true;
    await getHackerNewsInfo();
    isLoading = false;
  }

  async function getHackerNewsInfo() {
    const url = "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";
    const response = await fetch(url);
    
    if (response.ok) {
      data = await response.json();

    } else {
      error = true;
      console.error("Oops. something went wrong")
    }
  }
</script>

<h1>HelloFetch</h1>

<button on:click={handleInfoClick}>
  Get Info
</button>

{#if isLoading}
  <div>Loading..</div>
{:else if error}
  <div>Oops. something went wrong.</div>
{:else}
  {#if data}
    <div>by: {data.by}</div>
    <div>descendants: {data.descendants}</div>
    <div>id: {data.id}</div>
  {/if}
{/if}