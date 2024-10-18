import Vue from 'vue'
import Vuex from 'vuex'

import builder from './modules/builder'
import charmInventory from './modules/charmInventory'
import gearInventory from './modules/gearInventory'
import global from './modules/global'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    builder,
    charmInventory,
    gearInventory,
  },
  strict: false
})