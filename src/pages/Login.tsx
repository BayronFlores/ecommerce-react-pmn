import React, { useState } from 'react';
import '../styles/Login.css';
import {useNavigate } from 'react-router-dom';
// import mockUsers from '../data/userData';
import { UserService } from '../services/UserService';
import useAuth from '../hooks/useAuth';
import { notifyError } from '../utils/toastConfig';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  const users = UserService.getAll(); // <<--- Trae todos los usuarios (mock + registrados)
  const foundUser = users.find((user) => user.email === email && user.password === password);

  if (foundUser) {
    login(foundUser);
    navigate('/cuenta');
  } else {
    notifyError('Correo o contraseña incorrectos');
  }
};

  return (
    <section className="login">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2 className="h2">Login</h2>
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
              No tienes una cuenta? <Link to="/registrarse">Registrarme</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
