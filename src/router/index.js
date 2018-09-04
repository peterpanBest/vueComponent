import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/pages/home'], resolve)
const LoginP365 = resolve => require(['@/pages/Login/LoginP365'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/home', 
    },
    {
      path: '/home',
      component: Home,
      children: [
       
      ]
    },
    {
      path: '/LoginP365',
      component: LoginP365
    }
  ]
})
