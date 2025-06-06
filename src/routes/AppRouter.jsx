import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Oculto from '../pages/Oculto';
import Home from '../pages/Home';
import AdminDashboardLayout from '../layouts/AdminDashboardLayout';
import React from 'react';

const PanelAdmin = React.lazy(() => import('../pages/PanelAdmin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/panel',
    element: (
      <React.Suspense fallback={<div>Cargando panel...</div>}>
        <AdminDashboardLayout>
          <PanelAdmin />
        </AdminDashboardLayout>
      </React.Suspense>
    ),
  },
  {
    path: '/oculto',
    element: <Oculto />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
