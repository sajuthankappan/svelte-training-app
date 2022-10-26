<script>
  let header;
</script>


<div class="card-container">
  <div class="header">
    <slot name="header" />
  </div>

  <div class="main">
    <slot />
  </div>

  <div class="footer">
    <slot name="footer" />
  </div>
</div>
  
<style>
  .header {
    background-color: gray;
    padding: .25rem 0;
  }

  .footer {
    background-color: lightgreen;
    padding: .25rem 0;
  }

  .card-container {
    border: solid 1px;
    padding: 1rem;
  }
</style>