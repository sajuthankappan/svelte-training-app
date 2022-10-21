<script>
  let myElement;
  let myCanvas;

  function setValueClick() {
    // const myElement = document.getElementById('myElement');
    // myElement.innerHTML = "newValue";
    var ctx = myCanvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
</script>

<div>
  <!-- <div id="myElement" bind:this={myElement}></div> -->
  <canvas bind:this={myCanvas} width="200" height="100"></canvas>
</div>

<button on:click={setValueClick}>Set Value</button>