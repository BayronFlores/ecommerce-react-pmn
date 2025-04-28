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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-gray-700">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Panel de Administración</h3>
        <button
          className="w-full py-3 bg-gray-700 text-white text-lg font-semibold rounded-md transition-colors duration-300 hover:bg-indigo-600 focus:outline-none"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
