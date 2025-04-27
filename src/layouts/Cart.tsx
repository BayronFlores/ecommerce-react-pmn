import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import '../styles/cart.css';
import { cartItems as initialCartItems } from '../data/cartItems'; // Importar los datos iniciales del carrito
import Button from '../components/UI/Button';

const Cart: React.FC = () => {
  // Crear el estado para los productos en el carrito
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Crear un estado temporal para las cantidades
  const [tempQuantities, setTempQuantities] = useState(
    initialCartItems.map((item) => item.quantity)
  );

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (index: number, action: 'increase' | 'decrease') => {
    const updatedQuantities = [...tempQuantities];
    if (action === 'increase') {
      updatedQuantities[index] += 1;
    } else if (action === 'decrease' && updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    }
    setTempQuantities(updatedQuantities);
  };

  // Función para actualizar el carrito con las cantidades finales
  const updateCart = () => {
    const updatedCart = cartItems.map((item, index) => {
      item.quantity = tempQuantities[index];
      item.subtotal = item.price * item.quantity; // Recalcular el subtotal
      return item;
    });
    setCartItems(updatedCart);
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const shipping = 0; // Suponiendo que el envío es gratis
    const discount = 24; // Simulando un descuento fijo
    const tax = 61.99; // Simulando el impuesto fijo

    return subtotal + shipping - discount + tax;
  };

  // Usamos el hook de navigate para redirigir
  const navigate = useNavigate();

  const goToStore = () => {
    navigate('/tienda');
  };

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
                    <img src={item.image} alt="producto" width="60" height="60" />
                    <div>{item.name}</div>
                  </div>
                </td>
                <td>
                  {item.oldPrice && <span className="cart-old-price">{item.oldPrice}</span>}
                  <span>{item.price}</span>
                </td>
                <td>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(i, 'decrease')}>
                      −
                    </button>
                    <span>{tempQuantities[i]}</span>
                    <button onClick={() => updateQuantity(i, 'increase')}>
                      +
                    </button>
                  </div>
                </td>
                <td>{item.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-actions">
          <Button text="← VOLVER A LA TIENDA" onClick={goToStore} />
          <Button text="ACTUALIZAR CARRITO" onClick={updateCart} />
        </div>
      </div>

      <div className="cart-summary">
        <div className="cart-totals">
          <h4>Total de la compra</h4>
          <div>
            <span>Sub-total</span>
            <span>${cartItems.reduce((acc, item) => acc + item.subtotal, 0)}</span>
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
            <span>$61.99</span>
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
