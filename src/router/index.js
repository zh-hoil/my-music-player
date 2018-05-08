import Vue from 'vue'
import Router from 'vue-router'

/* 路由懒加载 */
const recommend = (resolve) => {
  import('components/recommend/recommend').then((recommend) => {
    resolve(recommend)
  })
}
const rank = (resolve) => {
  import('components/rank/rank').then((rank) => {
    resolve(rank)
  })
}
const search = (resolve) => {
  import('components/search/search').then((search) => {
    resolve(search)
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    }
  ]
})
