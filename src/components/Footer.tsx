import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/shop">🛍️ Tienda</Link>
        <Link to="/cart">🛒 Carrito</Link>
        <Link to="/account">👤 Cuenta</Link>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} MiTienda. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
