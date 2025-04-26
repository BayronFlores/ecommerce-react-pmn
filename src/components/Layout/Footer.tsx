import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/tienda">🛍️ Tienda</Link>
        <Link to="/carrito">🛒 Carrito</Link>
        <Link to="/cuenta">👤 Cuenta</Link>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} MiTienda. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
