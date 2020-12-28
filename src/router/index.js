import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import stock from '@/components/stock'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/stock',
      name: 'stock',
      component: stock

    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
