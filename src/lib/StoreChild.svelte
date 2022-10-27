<script>
  import { count, count2 } from "./store";
</script>

<div class="child-container">
  <h2>Store Child</h2>

  <div>
    Value: {$count}
    Value2: {count2}
  </div>
</div>

<style>
  .child-container {
    border: solid 1px;
    border-color: gray;
    padding: 1rem;
  }
</style>
