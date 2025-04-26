import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import mockUsers from '../data/userData';
import useAuth from '../hooks/useAuth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buscar usuario en el mock
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (foundUser) {
      login(foundUser);
      navigate('/cuenta');
    } else {
      setError('Correo o contraseña incorrectos');
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
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <a href="#">¿Olvidaste la contraseña?</a>
          </div>
          <button className="button" type="submit">
            Login
          </button>
          <div className="register-link">
            <p>
              No tienes una cuenta? <a href="/register">Registrarme</a>
            </p>
            <Link to="/cuenta" style={{ marginLeft: '1rem' }}>
              cuenta
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
