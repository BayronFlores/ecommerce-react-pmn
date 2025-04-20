import AccountNav from '../../components/AccountNav';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <AccountNav />
      <h2 className="dashboard-heading">Hola, Kevin</h2>
      <p className="dashboard-paragraph">
        Desde el panel de control de tu cuenta, puedes verificar y ver
        fácilmente tus{' '}
        <a href="#" className="dashboard-link">
          pedidos recientes
        </a>
        , administrar tus{' '}
        <a href="#" className="dashboard-link">
          direcciones de envío y facturación
        </a>{' '}
        y editar su{' '}
        <a href="#" className="dashboard-link">
          contraseña
        </a>{' '}
        y{' '}
        <a href="#" className="dashboard-link">
          detalles de la cuenta
        </a>
        .
      </p>

      <div className="dashboard-grid">
        {/* Información de la Cuenta */}
        <div className="dashboard-card">
          <h3 className="card-title">INFORMACIÓN DE LA CUENTA</h3>
          <div className="account-info">
            <img
              src="https://i.imgur.com/7k12EPD.png"
              alt="Perfil"
              className="profile-img"
            />
            <div>
              <strong>Kevin Gilbert</strong>
              <div>Dacca -1207, Bangladesh</div>
            </div>
          </div>
          <div>
            <strong>Correo electrónico:</strong> kevin.gilbert@gmail.com
          </div>
          <div>
            <strong>Sec Correo electrónico:</strong> kevin12345@gmail.com
          </div>
          <div>
            <strong>Teléfono:</strong> +1-202-555-0118
          </div>
          <button className="dashboard-button">EDITAR CUENTA</button>
        </div>

        {/* Dirección de Facturación */}
        <div className="dashboard-card">
          <h3 className="card-title">DIRECCIÓN DE FACTURACIÓN</h3>
          <div>
            <strong>Kevin Gilbert</strong>
          </div>
          <div className="address">
            East Tejturi Bazar, Palabra Nº 04, Carretera Nº 13/x,
            <br />
            Casa Nº 1320/C, Piso Nº 5D, Dhaka -1200, Bangladesh
          </div>
          <div>
            <strong>Teléfono:</strong> +1-202-555-0118
          </div>
          <div>
            <strong>Correo electrónico:</strong> kevin12345@gmail.com
          </div>
          <button className="dashboard-button">EDITAR DIRECCIÓN</button>
        </div>

        {/* Métricas de pedidos */}
        <div className="dashboard-metrics">
          <div className="info-box blue">
            <div className="icon">🚀</div>
            <div>
              <div className="info-number">154</div>
              <div>Pedidos totales</div>
            </div>
          </div>
          <div className="info-box orange">
            <div className="icon">📄</div>
            <div>
              <div className="info-number">5</div>
              <div>Órdenes pendientes</div>
            </div>
          </div>
          <div className="info-box green">
            <div className="icon">📦</div>
            <div>
              <div className="info-number">149</div>
              <div>Pedidos completados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
