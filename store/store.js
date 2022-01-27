import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    baseURL:'192.168.1.2',
    apiURL:'192.168.1.2/api_doc',
    applications: [],
    modules: [],
    httpCodes: [],
    tables: [],
    tableFields: [],
    terminals: [],
    terminalCodes:[],
    terminalParameters: [],
  },
  getters: {
    applications(state) {
      return state.applications
    }
  },
  mutations: {
    storeApplications(state, applications) {
      state.applications = applications
    }
  },
  actions: {
    async getApplications(state, { commit }) {
      const apps = await axios.get(`${state.apiURL}/applications`);
      commit('storeApplications', apps)
    }
  },
})