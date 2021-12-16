import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import History from './pages/History';
import NotFound from './pages/Page404';

export default function Router() {
    return useRoutes([
      {
        path: '/dashboard',
        children: [
          { element: <Navigate to="/dashboard/app" replace /> },
          { path: '/dashboard/home', element: <Dashboard /> },
          { path: '/dashboard/history', element: <History /> }
        ]      
      },
      {
        path: '/',
        element: <LogoOnlyLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: '404', element: <NotFound /> },
          { path: '/', element: <Navigate to="/dashboard/home" /> },
          { path: '*', element: <Navigate to="/404" /> }
        ]
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }
  