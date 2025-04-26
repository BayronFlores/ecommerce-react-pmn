import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();

  // Si no hay usuario logueado, redirige al login
  if (!user) {
    return <Navigate to="/Login" />;
  }

  // Si hay usuario logueado, permite acceder a la ruta
  return <Outlet />;
};

export default PrivateRoute;
