import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// constantRouterMap：主要是通用部分，每个用户都有的页面
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      hidden: true,
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '用户管理',
    meta: { title: '用户管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '用户列表', icon: 'table' }
      }
    ]
  },
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/admin',
    meta: {title: '用户权限', icon: 'ums'},
    children:[
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/ums/role/index'),
        meta: {title: '角色列表', icon: 'ums-role'}
      },
      {
        path: 'allocMenu',
        name: 'allocMenu',
        component: () => import('@/views/ums/role/allocMenu'),
        meta: {title: '分配权限'},
        hidden: true
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/ums/menu/index'),
        meta: {title: '权限列表', icon: 'ums-menu'}
      },
    ]
  },
  {
    path: '/product',
    component: Layout,
    name: 'product',
    meta: { title: '商品管理', icon: 'table' },
    children: [
      {
        path: 'list',
        name: 'Product',
        component: () => import('@/views/product/index'),
        meta: { title: '商品列表', icon: 'table' }
      },
      {
        path: 'category',
        name: 'Product',
        component: () => import('@/views/product/category'),
        meta: { title: '商品分类', icon: 'form' }
      },
      {
        path: 'paramsy',
        name: 'Product',
        component: () => import('@/views/product/params'),
        meta: { title: '分类参数', icon: 'table' }
      },
      {
        path: 'new',
        component: () => import('@/views/product/new'),
        meta: { title: '新增商品', icon: 'form' },
        hidden: true //不会在左侧菜单栏显示
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: 'order',
    meta: {
      title: '订单管理',
      icon: 'table'
    },
    children: [{
        path: 'goodlist',
        name: 'order',
        component: () => import('@/views/order/goodlist'),
        meta: {
          title: '发货管理',
          icon: 'form'
        }
      },
      {
        path: 'returnlist',
        name: 'order',
        component: () => import('@/views/order/returnlist'),
        meta: {
          title: '退货管理',
          icon: 'table'
        }
      },
      {
        path: 'new',
        component: () => import('@/views/order/new'),
        meta: {
          title: '新增商品',
          icon: 'table'
        },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: 'newnew',
        component: () => import('@/views/order/newnew'),
        meta: {
          title: '新增商品',
          icon: 'table'
        },
        hidden: true //不会在菜单栏中显示
      },
    ]
  },
  {
    path: '/data',
    component: Layout,
    name: 'data',
    meta: { title: '数据分析', icon: 'eye' },
    children: [
      {
        path: 'mainwatch',
        name: 'Data',
        component: () => import('@/views/data/mainwatch'),
        meta: { title: '主控数据', icon: 'table' }
      },
      {
        path: 'watch',
        name: 'Data',
        component: () => import('@/views/data/watch'),
        meta: { title: '监控数据', icon: 'form' }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    name: 'comment',
    alwaysShow: true,
    meta: { title: '留言管理', icon: 'comment' },
    children: [
      {
        path: 'index',
        name: 'Comment',
        component: () => import('@/views/comment/index'),
        meta: { title: '评论', icon: 'comrep' }
      },
      {
        path: 'new',
        component: () => import('@/views/comment/reply'),
        meta: { title: '回复', icon: 'form' },
        hidden: true
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },

  {
    path: '/setting',
    component: Layout,
    alwaysShow: true,
    redirect: '/setting/index',
    meta: { title: '系统设置', icon: 'setting' },
    children: [{
      path: 'index',
      name: 'Setting',
      component: () => import('@/views/setting/index'),
      meta: { title: '个人界面', icon: 'setting' }
    }]
  },

]

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'tree',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
