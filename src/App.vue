<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // 
  }
}
</script>

<style lang="scss">

#app {
  color: $base-color;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
