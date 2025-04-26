import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PublicOnlyRoute = () => {
  const { user } = useAuth();

  // Si el usuario ya está logueado, redirige a la cuenta o al Home
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Si no está logueado, permite el acceso
  return <Outlet />;
};

export default PublicOnlyRoute;
