import { Route } from 'react-router-dom';
import Dashboard from '../pages/account/Dashboard';
import OrderHistory from '../pages/account/OrderHistory';
import Profile from '../pages/account/Profile';

const AccountRoutes = (
  <>
    <Route index element={<Dashboard />} />
    <Route path="Ordenes" element={<OrderHistory />} />
    <Route path="Perfil" element={<Profile />} />
  </>
);

export default AccountRoutes;
