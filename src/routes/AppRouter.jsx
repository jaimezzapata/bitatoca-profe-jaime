import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Oculto from '../pages/Oculto';
import Home from '../pages/Home';
import AdminDashboardLayout from '../layouts/AdminDashboardLayout';
import React from 'react';
import VistaEstudiante from '../pages/VistaEstudiante';

const PanelAdmin = React.lazy(() => import('../pages/PanelAdmin'));
const RegistrarUsuarioPage = React.lazy(() => import('../pages/RegistrarUsuarioPage'));

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
      <React.Suspense fallback={""}>
        <AdminDashboardLayout>
          <PanelAdmin />
        </AdminDashboardLayout>
      </React.Suspense>
    ),
  },
  {
    path: '/vista-estudiante',
    element: <VistaEstudiante />,
  },
  {
    path: '/oculto',
    element: <Oculto />,
  },
  {
    path: '/panel/registrar-usuario',
    element: (
      <React.Suspense fallback={""}>
        <AdminDashboardLayout>
          <RegistrarUsuarioPage />
        </AdminDashboardLayout>
      </React.Suspense>
    ),
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
