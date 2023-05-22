import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children:[ 
      {
        path: '/categories/create',
        name: 'CategoryEdit',
        component: () => import('../views/CategoryEdit.vue')
      },
      {
        path: '/categories/edit/:id',
        name: 'categoriesEditId',
        component: () => import('../views/CategoryEdit.vue'),
        props:true
      },
      {
        path: '/categories/list',
        name: 'CategoryList',
        component: () => import('../views/CategoryList.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
