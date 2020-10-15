import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.scss'
import $ from 'jquery'
import 'popper.js'

window.$ = window.jQuery = require('jquery')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserEdit, faTrashAlt, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
