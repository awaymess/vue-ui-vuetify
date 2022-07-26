import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cart/:id',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView')
  },
  {
    path: '/shipping/:id',
    name: 'shipping',
    component: () => import('../views/ShipView')
  },
  {
    path: '/devivered/:id',
    name: 'devivered',
    component: () => import('../views/ShippedView')
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard')
  },
  {
    path: '/DashBoardDeliver',
    name: 'DashBoardDeliver',
    component: () => import('../views/DashBoardDeliver')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
