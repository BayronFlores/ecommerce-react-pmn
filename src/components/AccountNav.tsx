import { Link } from 'react-router-dom';

const AccountNav = () => {
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
    </nav>
  );
};

export default AccountNav;
