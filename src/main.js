import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
