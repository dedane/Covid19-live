import Vue from 'vue';
import Vuex from 'vuex';

import kenyaCases from './modules/kenyaCases'
import countries from './modules/countries'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    kenyaCases, countries
  },
});
