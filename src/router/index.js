import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Sift from '@/pages/sift/Sift'
import Boy from '@/pages/boy/Boy'
import Girl from '@/pages/girl/Girl'
import Comics from '@/pages/comics/Comics'
import Publish from '@/pages/publish/Publish'
import Listen from '@/pages/both/Listen'
import Fantasy from '@/pages/both/Fantasy'
import Writing from '@/pages/both/Writing'
import Free from '@/pages/both/Free'
import VIP from '@/pages/both/VIP'
import City from '@/pages/both/City'
import Bookstore from '@/pages/both/Bookstore'

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
          path: 'boy',
          component: Boy
        },
        {
          path: 'girl',
          component: Girl
        },
        {
          path: 'comics',
          component: Comics
        },
        {
          path: 'publish',
          component: Publish
        },
        {
          path: 'listen',
          component: Listen
        },
        {
          path: 'fantasy',
          component: Fantasy
        },
        {
          path: 'writing',
          component: Writing
        },
        {
          path: 'free',
          component: Free
        },
        {
          path: 'VIP',
          component: VIP
        },
        {
          path: 'city',
          component: City
        },
        {
          path: 'bookstore',
          component: Bookstore
        }
      ]
    },
  ]
})
