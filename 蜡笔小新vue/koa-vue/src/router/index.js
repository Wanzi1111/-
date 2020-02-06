import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue'),
    meta:{
      islogin:true,
      index:1
    }
  },  
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/detail.vue'),
    meta:{
      islogin:true,
      index:3
    }
  },
  {
    path: '/everylist',
    name: 'everylist',
    component: () => import(/* webpackChunkName: "about" */ '../views/everylist/everylist.vue'),
    meta:{
      islogin:true,
      index:2
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.islogin!=null){//如果不为空就证明需要守卫
    if(!localStorage.getItem("token")){//如果本地存储里面没有就跳到登录页面
      next("/")
    }
    next()
  }
  next()
})

export default router
