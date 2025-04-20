// src/pages/Home.tsx
import React from 'react';
import '../styles/Home.css';
import { benefits, productShowcase } from '../data/HomeData';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Sección de Promociones */}
      <div className="promo-section">
        {/* Banner principal */}
        <div className="main-banner">
          <div className="main-banner-text">
            <span className="main-banner-highlight">
              EL MEJOR LUGAR PARA JUGAR
            </span>
            <h2 className="main-banner-title">Consolas Xbox</h2>
            <p className="main-banner-desc">
              Ahorra hasta un 50% en juegos seleccionados de Xbox. Obtén 3 meses
              de PC Game Pass por $2 USD.
            </p>
            <button className="button-primary">COMPRAR AHORA →</button>
          </div>
          <div className="main-banner-image">
            <img
              src="https://i.imgur.com/XHcmTFi.png"
              alt="Xbox"
              style={{ height: '180px' }}
            />
            <div className="price-bubble">$299</div>
          </div>
        </div>

        {/* Ofertas laterales */}
        <div className="sidebar-offers">
          <div className="offer-card-dark">
            <div className="discount-label">29% DE DESCUENTO</div>
            <h4 style={{ marginTop: '2rem' }}>Nuevo Google Pixel 6 Pro</h4>
            <img
              src="https://i.imgur.com/kF6vBTS.png"
              alt="Pixel"
              style={{ width: '100%', margin: '1rem 0' }}
            />
            <button className="button-primary">COMPRAR AHORA</button>
          </div>

          <div className="offer-card-light">
            <h4>Xiaomi FlipBuds Pro</h4>
            <div className="offer-price">$229 USD</div>
            <img
              src="https://i.imgur.com/v6yOEex.png"
              alt="FlipBuds"
              style={{ width: '100%', height: '120px', objectFit: 'contain' }}
            />
            <button className="button-primary">COMPRAR AHORA</button>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="benefits-section">
        {benefits.map((b, i) => (
          <div key={i} className="benefit">
            <div className="benefit-icon">{b.icon}</div>
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.description}</div>
          </div>
        ))}
      </div>
      {/* Productos Destacados */}
      <div className="product-showcase">
        {productShowcase.map((p, i) => (
          <div
            key={i}
            className={`product-card ${
              p.status === 'SOLD OUT' ? 'sold-out' : ''
            }`}
          >
            {p.discount && <div className="discount-badge">{p.discount}</div>}
            {p.status && <div className="status-badge">{p.status}</div>}
            <img src={p.image} alt={p.title} />
            <div className="product-title">{p.title}</div>
            <div className="product-price">{p.price}</div>
            {p.oldPrice && (
              <div className="product-old-price">{p.oldPrice}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
