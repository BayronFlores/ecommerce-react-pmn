import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminPrivateRoute = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default AdminPrivateRoute;
