<template>
  <div>
    <div class="container-fluid">
      <div class="row py-5">
        <div class="col-lg-6">
          <div v-for="application in applications" class="card" :key="application.id">
            <button class="btn text-left card-header">
              <span class="text-uppercase">{{ application.name }}</span>
              <small class="text-black-50 ml-3">v {{ application.version }}</small>
            </button>
          </div>
        </div>
        <div class="col-lg-6">asdasd</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['applications'])
  }
}
</script>