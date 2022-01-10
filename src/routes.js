import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Current from './pages/Current.jsx'
import Detail from './pages/Detail.jsx'
import History from './pages/History.jsx';
import NotFound from './pages/Page404';

export default function Router() {
    return useRoutes([
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { element: <Navigate to="/dashboard/app" replace /> },
          { path: 'home', element: <Current /> },
          { path: 'detail', element: <Detail /> },
          { path: 'history', element: <History /> },
        ]      
      },
      {
        path: '/',
        element: <LogoOnlyLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: '404', element: <NotFound /> },
          { path: '/', element: <Navigate to="/dashboard/app" /> },
          { path: '*', element: <Navigate to="/404" /> }
        ]
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }
  