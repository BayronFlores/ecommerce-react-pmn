import React from 'react';
import '../styles/cart.css';
import { cartItems } from '../data/cartItems';

const Cart: React.FC = () => {
  return (
    <div className="cart-container">
      <div className="cart-products">
        <h3>Carrito de compras</h3>
        <table className="cart-table">
          <thead>
            <tr>
              <th>PRODUCTOS</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>SUB-TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <div className="cart-item">
                    <img
                      src={item.image}
                      alt="producto"
                      width="60"
                      height="60"
                    />
                    <div>{item.name}</div>
                  </div>
                </td>
                <td>
                  {item.oldPrice && (
                    <span className="cart-old-price">{item.oldPrice}</span>
                  )}
                  <span>{item.price}</span>
                </td>
                <td>
                  <div className="quantity-control">
                    <button>−</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </td>
                <td>{item.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-actions">
          <button>← VOLVER A LA TIENDA</button>
          <button>ACTUALIZAR CARRITO</button>
        </div>
      </div>

      <div className="cart-summary">
        <div className="cart-totals">
          <h4>Total de la compra</h4>
          <div>
            <span>Sub-total</span>
            <span>$320</span>
          </div>
          <div>
            <span>Naviero</span>
            <span>Gratis</span>
          </div>
          <div>
            <span>Descuento</span>
            <span>$24</span>
          </div>
          <div>
            <span>Impuesto</span>
            <span>61.99 $</span>
          </div>
          <hr />
          <div className="total">
            <span>Total</span>
            <span>$357.99 USD</span>
          </div>
          <button>PROCEDER AL PAGO →</button>
        </div>

        <div className="cart-coupon">
          <h4>Código de cupón</h4>
          <input type="text" placeholder="Dirección de correo electrónico" />
          <button>APLICAR CUPÓN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
