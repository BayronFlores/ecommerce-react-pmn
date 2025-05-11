import { Route } from 'react-router-dom';
import PrivateRoute from '@/components/routes/PrivateRoute';
import Dashboard from '@/pages/account/Dashboard';
import OrderHistory from '@/pages/account/OrderHistory';
import Profile from '@/pages/account/Profile';
import OrderDetail from '@/layouts/OrderDetail'
const AccountRoutes = (
  <Route element={<PrivateRoute />}>
    <Route index element={<Dashboard />} />
    <Route path="Ordenes" element={<OrderHistory />} />
    <Route path="Ordenes/:id" element={<OrderDetail />} />
    <Route path="Perfil" element={<Profile />} />
  </Route>
);

export default AccountRoutes;
