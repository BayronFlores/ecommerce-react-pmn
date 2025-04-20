import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulación básica de autenticación
    if (email && password) {
      navigate('/account'); // Redirección al panel de usuario
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
              No tienes una cuenta? <a href="/register">Registrarme</a>
            </p>
            {/* Aquí agregamos el Link adicional a cuenta */}
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
