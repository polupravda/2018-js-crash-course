import Vue from 'vue';
import Vuex from 'vuex';

import institutions from './modules/institutions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    institutions,
  },
});
