<template>
  <div class="h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center border">
          <div v-for="(application, i) in applications" class="card w-100 mb2 mt-2" :key="application.id">
            <button @click.prevent="selectApplication(i)"
              class="btn text-left card-header" 
              :disabled="selectedApplication.id === application.id">
              <span class="text-uppercase">{{ application.name }}</span>
              <small class="text-black-50 ml-3">v {{ application.version }}</small>

              <small 
                v-if="selectedApplication.id"
                @click.prevent="clearSelectedApplication" 
                class="thin-fonts float-right text-danger"
              >
                Clear Selection
              </small>
            </button>
          </div>
        </div>
        <div class="col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
          <div v-if="!selectedApplication.id.length" class="w-100 text-center">
            <h2 class="thin-fonts text-black-50">Please Select Application</h2>
          </div>
          <div v-else class="w-100">
            <h1 class="serif-fonts">
              {{ selectedApplication.name }}
              <small class="badge badge-pill badge-secondary float-right">{{ selectedApplication.version }}</small>
            </h1>
            <p class="small thin-fonts text-black-50 mb-3">[ base URL: {{ selectedApplication.baseURL }} ]</p>
            <div class="mt-3 text-justify">{{ selectedApplication.description }}</div>
            <Module :applicationID="selectedApplication.id" class="mt-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Module from '@/components/Module';

export default {
  components: { Module },
  data() {
    return {
      selectedApplication: { 
        id:'', name:'', format:'', description:'', 
        version:'',  scheme:'', baseURL:'', modules: []
      }
    }
  },
  computed: {
    ...mapGetters(['applications'])
  },
  methods: {
    selectApplication(i) {
      this.selectedApplication.id = this.applications[i].id;
      this.selectedApplication.name = this.applications[i].name;
      this.selectedApplication.version = this.applications[i].version;
      this.selectedApplication.description = this.applications[i].description;
      this.selectedApplication.baseURL = this.applications[i].base_url;
      this.selectedApplication.scheme = this.applications[i].scheme;
      this.selectedApplication.format = this.applications[i].format;
      this.selectedApplication.modules = this.applications[i].modules;
      
    },
    clearSelectedApplication() {
      this.selectedApplication.id = '', this.selectedApplication.name = '', this.selectedApplication.version = '';
      this.selectedApplication.description = ''; this.selectedApplication.scheme = ''; this.selectedApplication. baseURL = '';
    }
  }
}
</script>

<style lang="scss" scoped>

</style>