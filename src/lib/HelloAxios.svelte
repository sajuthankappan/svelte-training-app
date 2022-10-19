<script>
  import axios from 'axios';
  let hackerNewsPromise;

  // For more info on fetch api: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  async function handleInfoClick() {
    hackerNewsPromise = getHackerNewsInfo();
  }

  async function getHackerNewsInfo() {
    const url =
      "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";
    const response = await axios.get(url);
    return response.data;
  }
</script>

<h1>HelloAxios</h1>
<button on:click={handleInfoClick}> Get Info </button>

{#if hackerNewsPromise}
  {#await hackerNewsPromise}
    <div>Loading...</div>
  {:then data}
    <div>by: {data.by}</div>
    <div>descendants: {data.descendants}</div>
    <div>id: {data.id}</div>
  {:catch error}
    Some error...
  {/await}
{/if}
