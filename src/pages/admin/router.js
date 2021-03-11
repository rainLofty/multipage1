import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
}]
//index 路由配置
export default new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: routes
})
