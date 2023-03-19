import Vue from 'vue'
import VueRouter from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld.vue')
const List = () => import('@/views/list.vue')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes
})

export default router