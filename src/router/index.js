import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sina'
    },
    {
      path: '/sina',
      name: 'sina',
      component: () => import('@/components/sina/Index.vue'),
      children: [
        {
          path: '/',
          redirect: 'simple'
        },
        {
          path: 'simple',
          name: 'simple',
          component: () => import('@/components/sina/simple/Index.vue')
        },
        {
          path: 'hot',
          name: 'hot',
          component: () => import('@/components/sina/hot/Index.vue')
        }
      ]
    },
    {
      path: '/zhihu',
      name: 'zhihusimple',
      component: () => import('@/components/zhihu/simple/Index.vue')
    },
    {
      path: '/douban/',
      name: 'douban',
      component: () => import('@/components/douban/Index.vue'),
      children: [
        {
          path: '/',
          redirect: 'note'
        },
        {
          path: 'movie',
          name: 'movie',
          component: () => import('@/components/douban/movie/Index.vue')
        },
        {
          path: 'note',
          name: 'note',
          component: () => import('@/components/douban/note/Index.vue')
        }
      ]
    },
    {
      path: '/v2ex',
      name: 'v2exsimple',
      component: () => import('@/components/v2ex/simple/Index.vue')
    },
    {
      path: '/jianshu',
      name: 'jianshusimple',
      component: () => import('@/components/jianshu/simple/Index.vue')
    },
    {
      path: '/acfun',
      name: 'acfunsimple',
      component: () => import('@/components/acfun/simple/index.vue')
    }
  ]
})
