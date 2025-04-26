import { Route } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLayout from '../layouts/AdminLayout';
import AdminPrivateRoute from '../components/routes/AdminPrivateRoute';

const AdminRoutes = (
  <Route path="admin">
    <Route index element={<AdminLogin />} />
    <Route element={<AdminPrivateRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  </Route>
);

export default AdminRoutes;
