import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  history: true
})

router.map(Routes)
router.start(App, 'app')
