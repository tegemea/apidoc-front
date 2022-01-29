<template>
  <div id="app">
    <div v-if="!applications.length" class="overlay-loader d-flex flex-column">
      <h5 class="text-black-50 mb-3">API DOC</h5>
      <h6>LOADING</h6>
      <span><fai :icon="['fas','dharmachakra']" class="fa-3x fa-spin"></fai></span>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
        'applications',  'modules', 'httpCodes', 'tables', 'tableFields', 
        'terminals', 'terminalCodes', 'terminalParameters'
      ]),
    ...mapActions([
        'getApplications', 'getModules', 'getHttpCodes', 'getTables',
        'getTableFields', 'getTerminals', 'getTerminalCodes',
        'getTerminalParameters'
      ]),
  },
  mounted() {    
    setTimeout(() => { 
        this.getApplications; this.getModules; this.getHttpCodes;
      } ,1500);
  }
}
</script>

<style lang="scss">

#app {
  color: $base-color;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;

  .overlay-loader {
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background: rgba($color: #000000, $alpha: .3);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    color: white;
    text-shadow: 0 0 3px #000000;
  }
}
</style>
