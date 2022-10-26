<script>
    import Card from "./Card.svelte";
</script>

<h1>Composition Example</h1>

<Card>
  <p >Card Content here..</p>

  <p slot="footer">Footer</p>

  <div slot="header">
    <h2>Card Header New</h2>
  </div>
</Card>
