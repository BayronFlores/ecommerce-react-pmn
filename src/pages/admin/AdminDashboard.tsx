import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div>
      <h3>Panel del Admin</h3>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default AdminDashboard;
