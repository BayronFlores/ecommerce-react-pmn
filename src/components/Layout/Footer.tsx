import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6 text-center border-t border-gray-300 mt-0">
      <div className="mb-2">
        <Link to="/tienda" className="mr-4 text-white no-underline">
          🛍️ Tienda
        </Link>
        <Link to="/carrito" className="mr-4 text-white no-underline">
          🛒 Carrito
        </Link>
        <Link to="/cuenta" className="mr-4 text-white no-underline">
          👤 Cuenta
        </Link>
      </div>
      <p className="text-sm text-gray-500 mb-0">
        &copy; {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
