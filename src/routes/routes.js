import { Navigate } from 'react-router-dom';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import NotFound from '../pages/Page404';


/**
 * !important
 * 使用react-router-waiter插件库实现路由鉴权
 * 配置routes时引入子组件必须使用 component: () => import() 方式
 * 详见 https://github.com/neohan666/react-router-waiter/issues/8
 */
const routes = [
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      meta: {
          title: "首页",
          needLogin: true
      },
      children: [
        { 
            path: '/dashboard/detail', 
            component: () => import('../pages/Detail'), 
            meta: {
                title: "受检者预约",
                needLogin: true
            }, 
        },
        { 
            path: '/dashboard/current', 
            component: () => import('../pages/Current'), 
            meta: {
                title: "当前预约",
                needLogin: true
            },
        },
        { 
            path: '/dashboard/history', 
            component: () => import('../pages/History'), 
            meta: {
                title: "历史记录",
                needLogin: true
            },
        },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { 
            path: '/login', 
            element: <Login />, 
            meta: {
                title: "登录",
                needLogin: false
            },
        },
        { 
            path: '/404', 
            element: <NotFound />, 
            meta: {
                title: "页面未找到",
                needLogin: false
            },
        },
        { 
            path: '/', 
            element: <Navigate to="/dashboard/detail" />,
            meta: {
                title: "首页",
                needLogin: true
            }, 
        },
        { 
            path: '*', 
            element: <Navigate to="/404" />, 
            meta: {
                title: "页面未找到",
                needLogin: false
            },
        }
      ]
    },
    { 
        path: '*', 
        element: <Navigate to="/404" replace />, 
        meta: {
            title: "页面未找到",
            needLogin: false
        },
    }
  ];
export default routes