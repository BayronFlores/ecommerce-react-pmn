import '../styles/shop.css';
import { categorias, productos } from '../data/shopData';

const Shop = () => {
  return (
    <div className="shop-container">
      {/* Barra lateral */}
      <aside className="shop-sidebar">
        <h3>Categoría</h3>
        <ul className="shop-categories">
          {categorias.map((cat) => (
            <li key={cat}>
              <label>
                <input type="checkbox" /> {cat}
              </label>
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: '2rem' }}>Rango de Precios</h3>
        <input type="range" min={0} max={1000} className="shop-price-range" />
        <div className="shop-inputs">
          <input type="text" placeholder="Precio mínimo" />
          <input type="text" placeholder="Precio máximo" />
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="shop-main">
        <div style={{ marginBottom: '1rem' }}>
          <strong>Filtros activos:</strong> Dispositivos Electrónicos × 5
          Estrellas ×
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            Ordenar por:
            <select style={{ marginLeft: '0.5rem' }}>
              <option>Más popular</option>
              <option>Menor precio</option>
              <option>Mejor calificados</option>
            </select>
          </label>
        </div>

        <div className="shop-grid">
          {productos.map((producto) => (
            <div className="shop-product" key={producto.id}>
              <img src={producto.image} alt={producto.name} />
              <h4>{producto.name}</h4>
              <p>
                {'★'.repeat(producto.rating)}
                {'☆'.repeat(5 - producto.rating)} ({producto.reviews})
              </p>
              <strong>{producto.price}</strong>
              <div>
                <button style={{ marginTop: '0.5rem' }}>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
