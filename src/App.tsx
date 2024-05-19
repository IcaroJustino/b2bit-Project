import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/login'
import NotFoundPage from './pages/404'
import UserPage from './pages/UserPage'
import { PrivateRoute } from './types/types'
import { getToken } from './api/services'
import { ReactNode } from 'react'

export default function App() {

  function PrivateRoute({ children }: PrivateRoute) {
    return getToken() ? children : <Navigate to="/" replace />;
  }

  function ProtectedLogin({ children }: PrivateRoute) {
    return getToken() ? <Navigate to="/user" replace /> : children;
  }

  const getProtectedRoute = (index: number, path: string, Component: ReactNode) => {
    return (
      <Route
        key={index}
        path={path}
        element={<PrivateRoute>{Component}</PrivateRoute>}
      />
    );
  };

  const getAuthenticadedroutes = (key: number, path: string, Component: ReactNode) => {
    return (
      <Route key={key} path={path} element={<ProtectedLogin>{Component}</ProtectedLogin>} />
    );
  }

  const unprotectedRoutes = [
    { path: '/', component: <LoginPage /> },
  ];

  const protectedRoutes = [
    { path: '/user', component: <UserPage /> },
  ];



  return (
    <Routes>
      {unprotectedRoutes.map((item: any, index: number) => getAuthenticadedroutes(index, item.path, item.component))}
      {protectedRoutes.map((item: any, index: number) => getProtectedRoute(index, item.path, item.component))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
