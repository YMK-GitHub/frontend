import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterDemo from '@/components/RouterDemo'

Vue.use(Router)

export default new Router({
  mode :  'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/RouterDemo',
      name: 'RouterDemo',
      component: RouterDemo
    }
  ]
})
