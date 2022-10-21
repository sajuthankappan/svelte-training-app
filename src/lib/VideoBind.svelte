<script>
  let currentTime;
</script>

<h1>Video Bind</h1>


<video width="400" controls bind:currentTime={currentTime}>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>

<div>Current Time: {currentTime}</div>
<input type="number" bind:value={currentTime} />