<script>
  import { createEventDispatcher } from "svelte";
  import HelloDispatchChild from "./HelloDispatchChild.svelte";
  const dispatch = createEventDispatcher();

  function handleOk(e) {
    console.debug("ok in the middle", e.detail.value);

    dispatch("ok", {
      value: e.detail.value,
    });
  }

  function handleDelete(value) {
    console.debug("handleDelete", value)
  }
</script>

<HelloDispatchChild on:cancel on:ok={handleOk} deleteCallbackFn={handleDelete}/>
