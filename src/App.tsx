import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AppRoutes from './routes/AppRoutes';
import AccountRoutes from './routes/AccountRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        {/* Rutas públicas (inicio, login, shop, etc.) */}
        {AppRoutes}

        {/* Rutas privadas (account) */}
        <Route path="Cuenta">{AccountRoutes}</Route>

        {/* Ruta no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
