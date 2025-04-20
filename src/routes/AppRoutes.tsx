import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../layouts/Cart';
import Shop from '../pages/Shop';

const AppRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="Login" element={<Login />} />
    <Route path="Registrarse" element={<Register />} />
    <Route path="Carrito" element={<Cart />} />
    <Route path="Tienda" element={<Shop />} />
  </>
);

export default AppRoutes;
