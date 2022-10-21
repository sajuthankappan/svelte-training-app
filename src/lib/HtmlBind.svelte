<script>
  let htmlFromServer = "<h2>h2 heading</h2><p>jjjjjj</p>" //pretending this variable comes from an api fetch
</script>
<h1>HTML Bind</h1>
{@html htmlFromServer}

<textarea bind:value={htmlFromServer} />