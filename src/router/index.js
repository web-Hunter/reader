import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Sift from '@/pages/sift/Sift'
import Boy from '@/pages/both/Boy'
import Girl from '@/pages/both/Girl'
import Comics from '@/pages/both/Comics'
import Publish from '@/pages/both/Publish'
import Listen from '@/pages/both/Listen'
import Fantasy from '@/pages/both/Fantasy'
import Writing from '@/pages/both/Writing'
import Free from '@/pages/both/Free'
import VIP from '@/pages/both/VIP'
import City from '@/pages/both/City'
import Bookstore from '@/pages/both/Bookstore'
import Classify from '@/pages/classify/Classify'
import BaseNav from '@/pages/baseNav/BaseNav'
import BookRack from '@/pages/bookrack/BookRack'
import Find from '@/pages/find/Find'
import My from '@/pages/my/My'
import ClassifyComponent from '@/pages/classify/components/ClassifyComponent'
import Details from '@/pages/details/Details'
import IconDetails from '@/pages/icondetails/IconDetails'
import Hot from '@/pages/hot/Hot'
import Follow from '@/pages/follow/Follow'
import Square from '@/pages/square/Square'

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
    {
      path: '/classify',
      component: Classify,
      children:[
        {
          path: '/classifycomponent',
          component: ClassifyComponent
        }
      ]
    },
    {
      path: '/basenav',
      component: BaseNav
    },
    {
      path: '/bookrack',
      component: BookRack
    },
    {
      path: '/find',
      component: Find,
      children:[
        {
          path: '/hot',
          component: Hot
        },
        {
          path: '/follow',
          component: Follow
        },
        {
          path: '/square',
          component: Square
        }
      ]
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/icondetails',
      component: IconDetails
    }
  ]
})
