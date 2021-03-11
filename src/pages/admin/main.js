import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "@/utils/public.js"

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')