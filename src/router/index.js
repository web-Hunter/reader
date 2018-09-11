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
import FindIntroduce from '@/pages/find/components/FindIntroduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      redirect:'/home/sift',
      component: Home,
      children:[
        {path: '/home/sift',
        component: Sift
        },
        {
          path: '/home/boy',
          component: Boy
        },
        {
          path: '/home/girl',
          component: Girl
        },
        {
          path: '/home/comics',
          component: Comics
        },
        {
          path: '/home/publish',
          component: Publish
        },
        {
          path: '/home/listen',
          component: Listen
        },
        {
          path: '/home/fantasy',
          component: Fantasy
        },
        {
          path: '/home/writing',
          component: Writing
        },
        {
          path: '/home/free',
          component: Free
        },
        {
          path: '/home/VIP',
          component: VIP
        },
        {
          path: '/home/city',
          component: City
        },
        {
          path: '/home/bookstore',
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
      redirect: '/find/hot',
      component: Find,
      children:[
        {
          path: '/find/hot',
          component: Hot
        },
        {
          path: '/find/follow',
          component: Follow
        },
        {
          path: '/find/square',
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
    },
    {
      path: '/findIntroduce',
      component: FindIntroduce
    }
  ]
})
