import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import mockUsers from '../../data/userData';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Obtener usuarios locales desde localStorage
  const localUsers = JSON.parse(localStorage.getItem('users') || '[]');

  // Combinar usuarios sin duplicar por ID
  const combinedUsers = [...mockUsers, ...localUsers].filter(
    (user, index, self) => index === self.findIndex((u) => u.id === user.id)
  );

  const handleLogout = () => {
    logout();
     navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-700 text-white">
      <div className="max-w-6xl mx-auto bg-white text-black p-8 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Panel de Administración</h3>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-indigo-600"
          >
            Cerrar sesión
          </button>
        </div>

        <h4 className="text-xl font-semibold mb-4">Usuarios Registrados</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Rol</th>
                <th className="border px-4 py-2">Ciudad</th>
                <th className="border px-4 py-2">Teléfono</th>
                <th className="border px-4 py-2">Dirección</th>
                <th className="border px-4 py-2">País</th>
                <th className="border px-4 py-2">Región</th>
                <th className="border px-4 py-2">Código Postal</th>
              </tr>
            </thead>
            <tbody>
              {combinedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role ?? '-'}</td>
                  <td className="border px-4 py-2">{user.city ?? '-'}</td>
                  <td className="border px-4 py-2">{user.phoneNumber ?? '-'}</td>
                  <td className="border px-4 py-2">{user.address ?? '-'}</td>
                  <td className="border px-4 py-2">{user.country ?? '-'}</td>
                  <td className="border px-4 py-2">{user.state ?? '-'}</td>
                  <td className="border px-4 py-2">{user.zipCode ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
