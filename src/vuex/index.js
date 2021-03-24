import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: state,
    mutations: mutation
});

export default store
