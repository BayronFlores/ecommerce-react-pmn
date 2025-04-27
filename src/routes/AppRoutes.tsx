import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../layouts/Cart';
import Shop from '../pages/Shop';
import PrivateRoute from '../components/routes/PrivateRoute';
import PublicOnlyRoute from '../components/routes/PublicOnlyRoute';
import AdminRoutes from './AdminRoutes';
import ProductDetail from '../components/shop/ProductDetail';

const AppRoutes = (
  <>
    {AdminRoutes}
    <Route index element={<Home />} />
    <Route path="Tienda" element={<Shop />} />
    <Route path="Tienda/:id" element={<ProductDetail />} />

    {/* Rutas públicas SOLO si NO estás logueado */}
    <Route element={<PublicOnlyRoute />}>
      <Route path="Login" element={<Login />} />
      <Route path="Registrarse" element={<Register />} />
    </Route>

    {/* Rutas protegidas SOLO si estás logueado */}
    <Route element={<PrivateRoute />}>
      <Route path="Carrito" element={<Cart />} />
    </Route>
  </>
);

export default AppRoutes;
