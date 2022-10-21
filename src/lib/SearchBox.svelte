<script>
  import SearchIcon from "./icons/SearchIcon.svelte";

  let searchText;
  let searchResults = [];

  async function handleSubmit(event) {
    event.preventDefault();
    console.debug('submit clicked');

    searchResults = await getSearchResults();
    console.debug({searchText})
  }

  async function getSearchResults() {
    // pretend it is doing an api call :)
    const data = [
      {
        pageTitle: 'blog 1',
        pageContent: 'babcd abcd bacd'
      },
      {
        pageTitle: 'blog 2',
        pageContent: 'jjjjj jjjj jjjjj'
      },
    ];

    return data;
  }

  function handleSearchKeydown(event) {
    if (event.keyCode === 13) {
      console.debug('enter key pressed ', searchText);
    }
    // console.debug({event});
  }
</script>

<div>

  <form on:submit={handleSubmit}>
    <label for="search">Search</label>
    <input type="text" id="search" bind:value={searchText} >
    <SearchIcon />
  </form>

  <!-- <label for="search2">Search using keydown</label>
  <input type="search" id="search2" bind:value={searchText} on:keydown={handleSearchKeydown} > -->

  <div>
    Search Results:
    
    <table>
      <tr>
        <th>Title</th>
        <th>Content</th>
      </tr>
      {#each searchResults as searchResult}
        <tr>
          <td>
            <input type="text"bind:value={searchResult.pageTitle}>
          </td>
          <td>
            <input type="text"bind:value={searchResult.pageContent}>
          </td>
        </tr>
        <tr>
          <td>
            {searchResult.pageTitle}
          </td>
          <td>
            {searchResult.pageContent}
          </td>
        </tr>
      {/each}
      </table>
  </div>
  {JSON.stringify(searchResults)}
</div>

<style>
  .search-result-item {
    padding: 2rem;
  }
</style>