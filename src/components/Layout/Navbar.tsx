import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth(); // obtener usuario logueado

  return (
    <nav className="navbar">
      <div className="navbar-search">
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        {!user && (
          <>
            <Link to="/Login">Iniciar Sesión</Link>
            <Link to="/Registrarse">Registrarse</Link>
          </>
        )}

        <Link to="/Carrito">Carrito</Link>
        <Link to="/Tienda">Tienda</Link>

        {user && <Link to="/Cuenta">Cuenta</Link>}
      </div>
    </nav>
  );
};

export default Navbar;

