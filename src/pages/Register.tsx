import React, { useState } from 'react';
import '../styles/Login.css'; 

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!termsAccepted) {
      alert('Debe aceptar los términos y condiciones');
      return;
    }

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section className="login">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2 className="h2">Registro</h2>

          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="person"></ion-icon> */}
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Nombre completo</label>
          </div>

          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="mail"></ion-icon> */}
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Correo electrónico</label>
          </div>

          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="lock-closed"></ion-icon> */}
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Contraseña</label>
          </div>

          <div className="input-box">
            <span className="icon">
              {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
            </span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirmar contraseña</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
              Acepto los <a href="#">términos y condiciones</a>
            </label>
          </div>

          <button className="button" type="submit">
            Registrarme
          </button>

          <div className="register-link">
            <p>
              ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
