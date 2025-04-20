import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404</h1>
      <p>La página que buscas no fue encontrada.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
