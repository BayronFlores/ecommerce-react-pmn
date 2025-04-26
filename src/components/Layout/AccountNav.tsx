import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AccountNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // borra el usuario del contexto y del localStorage
    navigate('/Login'); // redirige al login
  };

  return (
    <nav style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/Cuenta" style={{ marginRight: '1rem' }}>
        🏠 Inicio
      </Link>
      <Link to="/Cuenta/Ordenes" style={{ marginRight: '1rem' }}>
        📦 Pedidos
      </Link>
      <Link to="/Cuenta/Perfil" style={{ marginRight: '1rem' }}>
        👤 Perfil
      </Link>
      <button
        onClick={handleLogout}
        style={{
          background: 'none',
          border: 'none',
          color: 'red',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        🚪 Cerrar sesión
      </button>
    </nav>
  );
};

export default AccountNav;
