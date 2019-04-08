import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/',
      component:resolve => require(['../pages/main/Index.vue'],resolve),
      meta:{
        title : '主页'
      },
      children:[
        {
          path:'/',
          component:resolve => require(['../pages/main/recommendation.vue'],resolve),
          meta:{
            title:'推荐'
          },
        },
        {
          path:'/hot',
          component:resolve => require(['../pages/main/hot.vue'],resolve),
          meta:{
            title:'热点'
          },
        },
        {
          path:'/picture',
          component:resolve => require(['../pages/main/picture.vue'],resolve),
          meta:{
            title:'图片'
          },
        },
        {
          path:'/technology',
          component:resolve => require(['../pages/main/technology.vue'],resolve),
          meta:{
            title:'科技'
          },
        }

      ]


    },

    {
      path: '/test',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta: {
        title: 'test'
      }
    },

    {
      path: '/a/:id',
      component: resolve => require(['../pages/main/ArticleDetail.vue'], resolve),
      meta: {
        title: '文章'
      }
    },

    {
      path: '/u/:id',
      component: resolve => require(['../pages/main/userCenter.vue'], resolve),
      meta: {
        title: '用户中心'
      },
    },

    {
      path: '/login',
      component: resolve => require(['../pages/main/Login.vue'], resolve),
      meta: {
        title: '登录'
      }
    },

    {
      path: '/main',
      component: resolve => require(['../pages/main/main.vue'], resolve),
      meta: {
        title: ''
      }
    },

    {
      path: '/goodsDetail',
      component: resolve => require(['../pages/main/goodsDetail.vue'], resolve),
      meta: {
        title: ''
      }
    },
    {
      path: '/test1',
      component: resolve => require(['../pages/main/test1.vue'], resolve),
      meta: {
        title: ''
      }
    },

    {
      path: '/comment',
      component: resolve => require(['../pages/main/comment.vue'], resolve),
      meta: {
        title: ''
      }
    },


    {
      path: '/upload',
      component: resolve => require(['../pages/main/upload.vue'], resolve),
      meta: {
        title: ''
      }
    },

    {
      path: '/reply',
      component: resolve => require(['../pages/main/reply.vue'], resolve),
      meta: {
        title: ''
      }
    },
  ]
})
