import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/users'
import site from './modules/sites'
import view from './modules/views'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user, site,view
    }
})