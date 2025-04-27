import React from 'react';
import styles from '../styles/Home.module.css';
import { benefits } from '../data/HomeData';
import { productos } from '../data/productos';
import Button from '../components/UI/Button';

const Home: React.FC = () => {
  const handleButtonClick = () => {
    alert('¡Comprando ahora!');
  };

  return (
    <div className={styles.homeContainer}>
      {/* Sección de Promociones */}
      <div className={styles.promoSection}>
        {/* Banner principal */}
        <div className={styles.mainBanner}>
          <div className={styles.mainBannerText}>
            <span className={styles.mainBannerHighlight}>EL MEJOR LUGAR PARA JUGAR</span>
            <h2 className={styles.mainBannerTitle}>Consolas Xbox</h2>
            <p className={styles.mainBannerDesc}>
              Ahorra hasta un 50% en juegos seleccionados de Xbox. Obtén 3 meses de PC Game Pass por
              $2 USD.
            </p>
            <Button text="COMPRAR AHORA →" onClick={handleButtonClick} />
          </div>

          <div className={styles.mainBannerImage}>
            <img src="https://i.imgur.com/XHcmTFi.png" alt="Xbox" style={{ height: '180px' }} />
            <div className={styles.priceBubble}>$299</div>
          </div>
        </div>

        {/* Ofertas laterales */}
        <div className={styles.sidebarOffers}>
          {/* Primer producto */}
          <div className={styles.offerCardRow}>
            <div className={styles.offerInfo}>
              <h4 className={styles.offerTitle}>Nuevo Google Pixel 6 Pro</h4>
              <div className={styles.offerPrice}>$799 USD</div>
              <Button text="Comprar ahora" onClick={handleButtonClick} />
            </div>
            <div className={styles.offerImageContainer}>
              <img
                src="https://clicon-html.netlify.app/image/add/add-mobile-1.png"
                alt="Pixel"
                className={styles.offerImage}
              />
            </div>
          </div>

          {/* Segundo producto */}
          <div className={styles.offerCardRow}>
            <div className={styles.offerImageContainer}>
              <img
                src="https://i.imgur.com/v6yOEex.png"
                alt="FlipBuds"
                className={styles.offerImage}
              />
            </div>
            <div className={styles.offerInfo}>
              <h4 className={styles.offerTitle}>Xiaomi FlipBuds Pro</h4>
              <div className={styles.offerPrice}>$229 USD</div>
              <Button text="Comprar ahora" onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className={styles.benefitsSection}>
        {benefits.map((b, i) => (
          <div key={i} className={styles.benefit}>
            <div className={styles.benefitIcon}>{b.icon}</div>
            <div className={styles.benefitTitle}>{b.title}</div>
            <div className={styles.benefitDesc}>{b.description}</div>
          </div>
        ))}
      </div>

      {/* Sección de Productos Destacados */}
      <div className={styles.productShowcase}>
        {productos
          .sort((a, b) => b.reviews - a.reviews) // Ordena de mayor a menor por número de reviews
          .slice(0, 8) // Toma solo los primeros 8 productos
          .map((p, i) => (
            <div
              key={p.id}
              className={`${styles.productCard} 
                    ${p.status === 'Sold Out' && <div className={styles.statusBadge}>Agotado</div>}
                    ${i === 0 ? styles.featuredProduct : ''}`}
            >
              {/* Opcionalmente puedes mostrar descuento o estado si tuvieras esos datos en 'productos' */}
              <img src={p.image} alt={p.name} className={styles.productImage} />
              <div className={styles.productTitle}>{p.name}</div>
              <div className={styles.productPrice}>{p.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
