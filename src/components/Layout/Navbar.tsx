import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// Clases organizadas en constantes
const navClasses = 'border-gray-200 bg-gray-900';
const containerClasses = 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4';
const logoClasses = 'flex items-center space-x-3 rtl:space-x-reverse';
const inputClasses =
  'block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

// Clases para los links
const linkClasses =
  'flex items-center py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
const activeLinkClasses =
  'flex items-center py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500';

// Componente Navbar
const Navbar = () => {
  const { user } = useAuth(); // Obtener usuario logueado
  const location = useLocation(); // Obtener la ubicación actual

  // Tipo explícito para 'path'
  const getLinkClasses = (path: string) => {
    return location.pathname === path ? activeLinkClasses : linkClasses;
  };

  return (
    <nav className={navClasses}>
      <div className={containerClasses}>
        {/* Logo */}
        <a href="/" className={logoClasses}>
          {' '}
          {/* Cambié 'href' por 'to' de 'Link' */}
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Ecommerce Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Ecommerce
          </span>
        </a>

        {/* Barra de búsqueda */}
        <div className="flex justify-center items-center w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fas fa-search"></i>
            </div>
            <input
              type="text"
              id="search-navbar"
              className={inputClasses}
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex space-x-4 items-center">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className={getLinkClasses('/')}>
                <i className="fas fa-home"></i>
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login" className={getLinkClasses('/login')}>
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/registrarse" className={getLinkClasses('/registrarse')}>
                    <i className="fas fa-user-plus"></i>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/carrito" className={getLinkClasses('/carrito')}>
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li>
              <Link to="/tienda" className={getLinkClasses('/tienda')}>
                <i className="fas fa-store"></i>
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/cuenta" className={getLinkClasses('/cuenta')}>
                  <i className="fas fa-user"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
