import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 注入vue-router后所有组件都可以获取到_router属性，可以通过$router使用
// 注入的是vuex中的store，所有组件都可以同$store拿到这个变量
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
