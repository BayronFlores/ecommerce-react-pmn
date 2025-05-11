import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { useTheme } from '@/context/ThemeContext';

const AccountNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout(); // borra el usuario del contexto y del localStorage
    navigate('/Login'); // redirige al login
  };

  return (
    <div className="h-screen w-50 bg-white relative flex overflow-hidden">
      {/* Sidebar */}
      <aside className="h-full w-50 flex flex-col space-y-10 items-start justify-center relative bg-gray-800 text-white">
        <div className="absolute top-4 right-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
              className="form-checkbox h-5 w-5"
            />
            <span className="text-xs">{theme === 'dark' ? 'Modo oscuro' : 'Modo claro'}</span>
          </label>
        </div>
        <div className="h-10 w-full flex items-center cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <Link to="/Cuenta" className="flex items-center space-x-4 px-4 py-2">
            <i className="fas fa-home text-2xl"></i>
            <span className="text-xs">Inicio</span>
          </Link>
        </div>

        <div className="h-10 w-full flex items-center cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <Link to="/Cuenta/Ordenes" className="flex items-center space-x-4 px-4 py-2">
            <i className="fas fa-box-open text-2xl"></i>
            <span className="text-xs">Órdenes</span>
          </Link>
        </div>

        <div className="h-10 w-full flex items-center cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <Link to="/Cuenta/Perfil" className="flex items-center space-x-4 px-4 py-2">
            <i className="fas fa-user text-2xl"></i>
            <span className="text-xs">Perfil</span>
          </Link>
        </div>

        <div className="h-10 w-full flex items-center cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
          <button
            onClick={handleLogout}
            className="text-red-500 flex items-center space-x-4 px-4 py-2"
          >
            <i className="fas fa-sign-out-alt text-2xl"></i>
            <span className="text-xs">Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default AccountNav;
