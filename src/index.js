import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './styles/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
