import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

import Products from '../views/AllProducts.vue'
import Myproducts from '../views/MyProducts.vue'
import Signin from '../views/SignIn.vue'
import Signup from '../views/SignUp.vue'
import firebase from '../Firebase'
import NavBar from '../views/NavBar';
import AboutView from '../views/AboutView.vue';
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'HomeView',
      component: Home
    },
    {
      path: '/Allproducts',
      name: 'AllProducts',
      component: Products,
      meta: { requiresAuth: true },
    },
    {
      path: '/myproducts',
      name: 'MyProducts',
      component: Myproducts,
      meta: { requiresAuth: true },
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: Signin
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },
    {
      path: '/NavBar',
      name: 'NavBar',
      component: NavBar
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, // Ajoutez une virgule ici
    
    {
      path: '/About',
      name: 'AboutView',
      component: AboutView
    }
    
  ]
})
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/signin')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})
export default router