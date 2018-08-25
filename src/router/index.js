import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Sift from '@/pages/sift/Sift'
import Man from '@/pages/man/Man'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'/sift',
      component: Home,
      children:[
        {path: 'sift',
        component: Sift
        },
        {
          path: 'man',
          component: Man
        }
      ]
    },
  ]
})
