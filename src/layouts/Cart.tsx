import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Button from '../components/UI/Button';
import '../styles/cart.css';

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    return <div className="text-center text-red-500">CartContext no disponible</div>;
  }

  const { cartItems, removeFromCart, updateItemQuantity } = cartContext;
  const [tempQuantities, setTempQuantities] = useState<number[]>([]);

  useEffect(() => {
    setTempQuantities(cartItems.map((item) => item.quantity));
  }, [cartItems]);

  const updateQuantity = (index: number, action: 'increase' | 'decrease') => {
    const updatedQuantities = [...tempQuantities];
    if (action === 'increase') {
      updatedQuantities[index]++;
    } else if (action === 'decrease' && updatedQuantities[index] > 1) {
      updatedQuantities[index]--;
    }
    setTempQuantities(updatedQuantities);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleUpdateCart = () => {
    cartItems.forEach((item, index) => {
      updateItemQuantity(item.id, tempQuantities[index]);
    });
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item, index) => acc + item.price * tempQuantities[index],
      0
    );
    const shipping = 0;
    const discount = 24;
    const tax = 61;

    return subtotal + shipping - discount + tax;
  };

  const goToStore = () => {
    navigate('/tienda');
  };

  return (
    <div className="cart-container">
      <div className="cart-products">
        <h3>Carrito de compras</h3>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Tu carrito está vacío</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>PRODUCTOS</th>
                  <th>PRECIO</th>
                  <th>CANTIDAD</th>
                  <th>SUB-TOTAL</th>
                  <th>ACCIONES</th> {/* NUEVA COLUMNA */}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-item">
                        <img src={item.image} alt={item.name} width="60" height="60" />
                        <div>{item.name}</div>
                      </div>
                    </td>
                    <td>
                      ${item.price}
                      {item.priceDiscount && (
                        <span className="text-red-500 ml-2">(${item.priceDiscount})</span>
                      )}
                    </td>
                    <td>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(i, 'decrease')}>−</button>
                        <span>{tempQuantities[i]}</span>
                        <button onClick={() => updateQuantity(i, 'increase')}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * tempQuantities[i]).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleRemoveItem(item.id)} className="remove-button">
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-actions">
              <Button text="← VOLVER A LA TIENDA" onClick={goToStore} />
              <Button text="ACTUALIZAR CARRITO" onClick={handleUpdateCart} />
            </div>
          </>
        )}
      </div>

      <div className="cart-summary">
        <div className="cart-totals">
          <h4>Total de la compra</h4>
          <div>
            <span>Sub-total</span>
            <span>
              ${cartItems.reduce((acc, item, index) => acc + item.price * tempQuantities[index], 0)}
            </span>
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
            <span>$61</span>
          </div>
          <hr />
          <div className="total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)} USD</span>
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
