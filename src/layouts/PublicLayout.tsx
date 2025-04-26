import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const PublicLayout = () => {
  const location = useLocation();

  // Si estamos en alguna ruta que comienza con "/admin", no mostramos navbar ni footer
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminRoute && <Navbar />}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default PublicLayout;
