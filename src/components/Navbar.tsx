import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="navbar-links">
        <Link to="/">home</Link>
        <Link to="/Login">Iniciar Sesión</Link>
        <Link to="/Registrarse">registrarse</Link>
        <Link to="/Carrito">Carrito</Link>
        <Link to="/Tienda">Tienda</Link>
        <Link to="/Cuenta">cuenta</Link>
      </div>
    </nav>
  );
};

export default Navbar;
