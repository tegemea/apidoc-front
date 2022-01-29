import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    baseURL:'http://192.168.1.2',
    apiURL:'http://192.168.1.2/api_doc',
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
    applications(state) { return state.applications; },
    modules(state) { return state.modules },
    httpCodes(state) { return state.httpCodes },
    tables(state) { return state.tables },
    tableFields(state) { return state.tableFields },
    terminals(state) { return state.terminals },
    terminalCodes(state) { return state.terminalCodes },
    terminalParameters(state) { return state.terminalParameters }
  },
  mutations: {
    storeApplications(state, applications) { state.applications = applications },
    storeModules(state, modules) { state.modules = modules },
    storeHttpCodes(state, httpCodes) { state.httpCodes = httpCodes },
    storeTables(state, tables) { state.tables = tables },
    storeTableFields(state, tableFields) { state.tableFields = tableFields },
    storeTerminals(state, terminals) { state.terminals = terminals },
    storeTerminalCodes(state, terminalCodes) { state.terminalCodes = terminalCodes },
    storeTerminalParameters(state, parameters) { state.terminalParameters = parameters }
  },
  actions: {
    async getApplications({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/applications`);
      if(data) commit('storeApplications', data);
    },
    async getModules({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/modules`);
      if(data) commit('storeModules', data);
    },
    async getHttpCodes({ state,commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/httpCodes`);
      if(data) commit('storeHttpCodes', data);
    },
    async getTables({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/tables`);
      if(data) commit('storeTables', data);
    },
    async getTableFields({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/tablesFields`);
      if(data) commit('storeTableFields', data);
    },
    async getTerminals({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/terminals`);
      if(data) commit('storeTerminals', data);
    },
    async getTerminalCodes({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/terminalCodes`);
      if(data) commit('storeTerminalCodes', data);
    },
    async getTerminalParameters({ state, commit }) {
      const { data: { data } } = await axios.get(`${state.apiURL}/terminalParameters`)
      if(data) commit('storeTerminalParameters', data);
    }
  },
})