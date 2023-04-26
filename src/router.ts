import path from 'path'
import { createRouter, createWebHashHistory } from 'vue-router'

const userRouter = [
  {
    name: 'address',
    path: '/address',
    component: () => import('@/view/user/address/index.vue'),
    meta: {
      title: '收货地址列表'
    }
  },
  {
    name: "address-edit",
    path: "/address/edit",
    component: () => import('@/view/user/address/edit.vue'),
    meta: {
      title: '收货地址编辑'
    }
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/view/user/index.vue'),
    meta: {
      title: '队员中心'
    }
  },

];

const routes = [
  /*   {
      name: 'notFound',
      path: '/:path(.*)+',
      redirect: {
        name: '404'
      }
    }, */
  {
    name: 'index',
    path: '/index',
    component: () => import('@/view/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/view/user/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/view/cart/index.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('@/view/goods/index.vue'),
    meta: {
      title: '商品详情'
    }
  }
]


const allRoutes = userRouter.concat(routes);

const router = createRouter({
  routes:allRoutes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router
