<template>
  <div>
    <h3 v-if="application" class="serif-fonts">{{ application.name }} - Modules</h3>
    <ul class="list-group list-group-flush">
      <li v-for="module in applicationModules" class="list-group-item pl-0" :key="module.id">
        {{ module.name }} 
        <small class="float-right thin-fonts tabs">
          <span v-if="module.terminals.length" @click.prevent="selectedComponent = 'Terminal'" class="mr-3 tab">Terminals</span> 
          <span v-if="module.tables.length" @click.prevent="selectedComponent = 'Table'" class="tab">Tables</span>
        </small>
        <component :terminals="module.terminals" :tables="module.tables" :is="selectedComponent"></component>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Terminal from '@/components/Terminal'
import Table from '@/components/Table'

export default {
  props: ['applicationID'],
  components: {
    Terminal, Table
  },
  data() {
    return {
      applicationModules: [], application: '', selectedComponent:'Terminal'
    }
  },
  computed: {
    ...mapGetters(['applications','modules'])
  },
  watch: {
    applicationID: async function(appID) {
      this.setBasics(appID)
    }
  },
  mounted() {
    this.setBasics(this.applicationID)
  },
  methods: {
    async setBasics(appID) {
      if(this.applications.length && this.modules.length) {
        this.applicationModules = await this.modules.filter(m => m.application.id === appID);
        this.application = await this.applications.find(a => a.id === appID)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  .tab {
    cursor: pointer;
  }
}
</style>