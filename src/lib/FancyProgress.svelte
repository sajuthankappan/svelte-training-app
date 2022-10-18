<script>
  export let progress = 0;
  export let name = '';
</script>

<div class="fancylabel">
  Hello {name}
</div>

<div class="progressdiv">
  <progress value={progress} max="100"> {progress}% </progress>
</div>

<style>
  .progressdiv {
    background-color: red;
  }

  .fancylabel {
    background-color: red;
  }
</style>