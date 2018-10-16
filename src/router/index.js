import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Main from '../components/layout/LayoutNew'
import Home from '../components/basedata/Home'
import Autumn from '../components/basedata/Autumn'
import Summer from '../components/basedata/Summer'
import Spring from '../components/basedata/Spring'
import Winter from '../components/basedata/Winter'
// import LayoutNew from '../components/layout/LayoutNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/index',
      name: 'index',
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/spring',
          name: 'spring',
          component: Spring
        },
        {
          path: '/summer',
          name: 'summer',
          component: Summer
        },
        {
          path: '/autumn',
          name: 'autumn',
          component: Autumn
        },
        {
          path: '/winter',
          name: 'winter',
          component: Winter
        }
      ]
    }
  ]
})
