import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

// Clases base
const navClasses = 'border-gray-200 bg-gray-900';
const containerClasses = 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4';
const logoClasses = 'flex items-center space-x-3 rtl:space-x-reverse';
const inputClasses =
  'block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
const linkClasses =
  'flex items-center py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
const activeLinkClasses =
  'flex items-center py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500';

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClasses = (path: string) =>
    location.pathname === path ? activeLinkClasses : linkClasses;

  return (
    <nav className={navClasses}>
      <div className={`${containerClasses} gap-4`}>
        {/* Logo */}
        <Link to="/" className={logoClasses}>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Ecommerce Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Ecommerce
          </span>
        </Link>

        {/* Barra de búsqueda */}
        <div className="w-full mt-1 md:mt-1 md:ml-4 md:w-auto flex-1">
          <div className="relative w-full max-w-full md:max-w-md lg:max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fas fa-search text-gray-400 dark:text-gray-300"></i>
            </div>
            <input
              type="text"
              id="search-navbar"
              className={inputClasses}
              placeholder="Buscar..."
            />
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none ml-2"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className={getLinkClasses('/')}>
                <i className="fas fa-home mr-1"></i>Inicio
              </Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link to="/login" className={getLinkClasses('/login')}>
                    <i className="fas fa-user mr-1"></i>Ingresar
                  </Link>
                </li>
                <li>
                  <Link to="/registrarse" className={getLinkClasses('/registrarse')}>
                    <i className="fas fa-user-plus mr-1"></i>Registrarse
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/carrito" className={getLinkClasses('/carrito')}>
                <i className="fas fa-shopping-cart mr-1"></i>Carrito
              </Link>
            </li>
            <li>
              <Link to="/tienda" className={getLinkClasses('/tienda')}>
                <i className="fas fa-store mr-1"></i>Tienda
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/cuenta" className={getLinkClasses('/cuenta')}>
                  <i className="fas fa-user mr-1"></i>Cuenta
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
