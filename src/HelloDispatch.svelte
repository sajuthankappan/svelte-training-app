<script>
  import HelloDispatchChild from "./lib/HelloDispatchChild.svelte";

  function handleCancel(event) {
    console.debug('cancelled', {event});
  }

  function handleOk(event) {
    const value = event.detail.value;
    console.debug('ok with value ', value);
  }
</script>
Hello Dispatch

<HelloDispatchChild on:cancel={handleCancel} on:ok={handleOk}/>