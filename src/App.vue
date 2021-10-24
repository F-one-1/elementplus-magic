<template>
  <div id="app">
    <div style="height: 700px; padding: 20px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
    /* background: #114585; */
  }
</style>
