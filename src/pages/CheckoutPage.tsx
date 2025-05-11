import React, { useState, useContext, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/utils/stripe';
import { CartContext } from '@/context/CartContext';
import StripePaymentForm from '@/components/stripe/StripePaymentForm';
import useAuth from '@/hooks/useAuth'; // Importamos useAuth

const CheckoutPage: React.FC = () => {
  const cartContext = useContext(CartContext);
  const { user } = useAuth(); // Obtenemos los datos del usuario

  if (!cartContext) {
    return <div className="text-center text-red-500">CartContext no disponible</div>;
  }

  const { cartItems } = cartContext;

  const getProductPrice = (item: any) => {
    const price = item.priceDiscount || item.price;
    const priceString = price.toString();
    return parseFloat(priceString.replace('$', ''));
  };

  // Estado de los datos de envío
  const [shippingData, setShippingData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    phone: '',
  });

  // Rellenamos los campos con los datos del usuario si existen
  useEffect(() => {
    if (user) {
      setShippingData({
        name: user.name || '',
        address: user.address || '',
        city: user.city || '',
        country: user.country || '',
        phone: user.phoneNumber || '',
      });
    }
  }, [user]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * getProductPrice(item),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Resumen de la Compra</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna izquierda: Carrito + Envío */}
        <div className="flex-1 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Productos</h3>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between border-b pb-2">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${(getProductPrice(item) * item.quantity).toFixed(0)}</span>
                </li>
              ))}
            </ul>
            <div className="text-right font-semibold mt-4">Total: ${totalPrice}</div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Datos de Envío</h3>
            <div className="space-y-2">
              {['name', 'address', 'city', 'country', 'phone'].map((field) => (
                <input
                  key={field}
                  name={field}
                  value={shippingData[field as keyof typeof shippingData]} // Llenar automáticamente los campos
                  onChange={(e) => setShippingData({ ...shippingData, [e.target.name]: e.target.value })}
                  placeholder={
                    field === 'name'
                      ? 'Nombre completo'
                      : field === 'address'
                      ? 'Dirección'
                      : field === 'city'
                      ? 'Ciudad'
                      : field === 'country'
                      ? 'País'
                      : 'Teléfono'
                  }
                  className="p-2 border rounded w-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha: Pago */}
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Datos de pago</h3>
            <Elements stripe={stripePromise}>
              <StripePaymentForm totalAmount={totalPrice} shippingData={shippingData} cartItems={cartItems} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
