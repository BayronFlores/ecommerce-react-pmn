import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '@/context/CartContext';
import Button from '@/components/UI/Button';
import '@/styles/cart.css';
import { notifySuccess } from '@/utils/toastConfig';

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
     notifySuccess('Carrito actualizado');
  };

  const getProductPrice = (item: any) => {
    const price = item.priceDiscount || item.price; // Usar priceDiscount si está disponible, de lo contrario price
    const priceString = price.toString(); // Convertir a string para evitar errores con el método replace
    return parseFloat(priceString.replace('$', '')); // Eliminar el signo $ y convertir a número
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item, index) => acc + getProductPrice(item) * tempQuantities[index],
      0
    );
    const shipping = 0;
    // const discount = 24;

    return subtotal + shipping;
  };

  const goToStore = () => {
    navigate('/tienda');
  };

  const handlecheckout = () => {
    console.log('Procesando el pago...');
    navigate('/checkout');
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
                  <th>ACCIONES</th>
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
                    <td>${getProductPrice(item).toFixed(0)}</td>
                    <td>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(i, 'decrease')}>−</button>
                        <span>{tempQuantities[i]}</span>
                        <button onClick={() => updateQuantity(i, 'increase')}>+</button>
                      </div>
                    </td>
                    <td>${(getProductPrice(item) * tempQuantities[i]).toFixed(0)}</td>
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
              $
              {cartItems
                .reduce(
                  (acc, item, index) => acc + getProductPrice(item) * tempQuantities[index],
                  0
                )
                .toFixed(0)}
            </span>
          </div>
          <div>
            <span>Envio</span>
            <span>Gratis</span>
          </div>
          {/* <div>
            <span>Descuento</span>
            <span>$24</span>
          </div> */}
          {/* <div>
            <span>Impuesto</span>
            <span>$61</span>
          </div> */}
          <hr />
          <div className="total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(0)} USD</span>
          </div>
          <button
            onClick={handlecheckout}
            disabled={cartItems.length === 0}
            className={`w-full mt-4 py-2 px-4 rounded text-white font-semibold transition duration-300 ${
              cartItems.length === 0
                ? 'bg-gray-300 cursor-not-allowed opacity-60'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            PROCEDER AL PAGO →
          </button>
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
