import { Link } from 'react-router-dom';
import AccountNav from '@/components/Layout/AccountNav';
import '@/styles/Dashboard.css';
import useAuth from '@/hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="dashboard-container">
      <AccountNav />
      <div className="content-area flex-1 p-6">
        <h2 className="dashboard-heading">Hola, {user.name}</h2>
        <p className="dashboard-paragraph">
          Desde el panel de control de tu cuenta, puedes verificar y ver fácilmente tus{' '}
          <a href="#" className="dashboard-link">
            pedidos recientes
          </a>
          , administrar tus{' '}
          <a href="#" className="dashboard-link">
            direcciones de envío y facturación
          </a>{' '}
          y editar tu{' '}
          <a href="#" className="dashboard-link">
            contraseña
          </a>{' '}
          y{' '}
          <a href="#" className="dashboard-link">
            detalles de la cuenta
          </a>
          .
        </p>

        <div className="dashboard-grid ">
          <div className="dashboard-card">
            <h3 className="card-title">INFORMACIÓN DE LA CUENTA</h3>
            <div className="account-info">
              <img
                src={user.profileImage || 'https://i.imgur.com/7k12EPD.png'}
                alt="Perfil"
                className="profile-img"
              />
              <div>
                <strong>{user.name}</strong>
                <div>
                  {user.country} - {user.zipCode}, {user.state}
                </div>
              </div>
            </div>
            <div>
              <strong>Correo electrónico:</strong> {user.email}
            </div>
            <div>
              <strong>Teléfono:</strong> {user.phoneNumber || 'No disponible'}
            </div>
            <div className="mt-6 mb-6">
              <Link to="/Cuenta/Perfil" className="dashboard-button">
                EDITAR CUENTA
              </Link>
            </div>
          </div>

          <div className="dashboard-card">
            <h3 className="card-title">DIRECCIÓN DE FACTURACIÓN</h3>
            <div>
              <strong>{user.name}</strong>
            </div>
            <div className="address">
              {user.state}, {user.country} - {user.zipCode}
            </div>
            <div>
              <strong>Teléfono:</strong> {user.phoneNumber || 'No disponible'}
            </div>
            <div>
              <strong>Correo electrónico:</strong> {user.email}
            </div>
            <div className="mt-6 mb-6">
              <Link to="/Cuenta/Perfil" className="dashboard-button">
                EDITAR DIRECCIÓN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
