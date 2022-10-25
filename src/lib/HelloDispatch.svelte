<script>
  import HelloDispatchMiddle from "./HelloDispatchMiddle.svelte";

  function handleCancel(event) {
    console.debug('cancelled', {event});
  }

  function handleOk(event) {
    const value = event.detail.value;
    console.debug('ok with value ', value);
  }
</script>

Hello Dispatch

<HelloDispatchMiddle on:cancel={handleCancel} on:ok={handleOk}/>