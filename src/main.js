import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'bootstrap'
import './assets/app.scss'
import 'jquery'
import 'popper.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserEdit, faTrashAlt, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')