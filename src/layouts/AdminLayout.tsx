// import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Sidebar /> */}
      <main style={{ padding: '1rem', flex: 1 }}>
        <h2>Bienvenido, Administrador</h2>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
