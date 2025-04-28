import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import mockUsers from '../../data/userData'; // Ajusta ruta si es necesario

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminUser = mockUsers.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === 'admin',
    );

    if (adminUser) {
      login(adminUser);
      navigate('/admin/dashboard');
    } else {
      setError('Credenciales inválidas o no eres administrador.');
    }
  };

  return (
    <section className="login">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2 className="h2">Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="input-box">
            <span className="icon">
              <i className="bx bx-envelope"></i>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bx-lock-alt"></i>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">

          </div>
          <button className="button" type="submit">
            Login
          </button>
          <div className="register-link">
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
