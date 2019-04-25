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
        title : '主页',
        // type:'login'
        requireAuth:true
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
        },
        {
          path:'/entertainment',
          component:resolve => require(['../pages/main/entertainment.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/game',
          component:resolve => require(['../pages/main/game.vue'],resolve),
          meta:{
            title:''
          },
        },
        {
          path:'/sport',
          component:resolve => require(['../pages/main/sport.vue'],resolve),
          meta:{
            title:'科技'
          },
        },
        {
          path:'/car',
          component:resolve => require(['../pages/main/car.vue'],resolve),
          meta:{
            title:'科技'
          },
        },
        {
          path:'/economics',
          component:resolve => require(['../pages/main/economics.vue'],resolve),
          meta:{
            title:'科技'
          },
        },
        {
          path:'/funny',
          component:resolve => require(['../pages/main/funny.vue'],resolve),
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
      path: '/register',
      component: resolve => require(['../pages/main/Register.vue'], resolve),
      meta: {
        title: '注册'
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
      path: '/test11',
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

    {
      path: '/search',
      component: resolve => require(['../pages/main/search.vue'], resolve),
      meta: {
        title: ''
      }
    },

    {
      path: '/write',
      component: resolve => require(['../pages/main/Write.vue'], resolve),
      meta: {
        title: '写文章'
      }
    },
  ]
})
