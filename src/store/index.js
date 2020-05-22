import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import kenyaCases from './modules/kenyaCases'
import countries from './modules/countries'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    kenyaCases,countries
  },
});
