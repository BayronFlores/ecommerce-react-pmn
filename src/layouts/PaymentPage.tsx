import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Asegúrate de importar el CartContext
import Button from '../components/UI/Button';
interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: string;
  priceDiscount?: string;
}

interface ShippingData {
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
}

interface LocationState {
  totalAmount: number;
  shippingData: ShippingData;
  cartItems: CartItem[];
}

const ConfirmacionPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { totalAmount, shippingData, cartItems } = state as LocationState;
  const [orderId, setOrderId] = useState<string | null>(null);

    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate('/Cuenta/Ordenes');
    };

  // Accede al contexto del carrito
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>No se encontró el contexto del carrito.</div>;
  }

  const { clearCart } = cartContext;

  if (!state) {
    return <div>No se encontraron datos de la compra.</div>;
  }

  const getProductPrice = (item: CartItem) => {
    const price = item.priceDiscount || item.price;
    const priceString = price.toString();
    return parseFloat(priceString.replace('$', ''));
  };

  // Guardar la orden en localStorage al cargar la página
  useEffect(() => {
    // Si ya hay un orderId, no volver a guardar
    if (orderId) return;

    const newOrderId = `ORD-${Date.now()}`;

    const newOrder = {
      id: newOrderId,
      status: 'Completado',
      statusColor: 'green',
      date: new Date().toLocaleString(),
      total: `$${totalAmount.toFixed(0)}`,
      items: cartItems,
      shippingData,
    };

    const existingOrders = JSON.parse(
      localStorage.getItem('orderHistory') || '[]'
    ) as (typeof newOrder)[];

    // Verificar que la orden no esté duplicada
    const alreadyExists = existingOrders.some(
      (order) =>
        order.total === newOrder.total &&
        JSON.stringify(order.items) === JSON.stringify(newOrder.items) &&
        JSON.stringify(order.shippingData) === JSON.stringify(newOrder.shippingData)
    );
    if (!alreadyExists) {
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem('orderHistory', JSON.stringify(updatedOrders));
    }

    setOrderId(newOrderId);

    // Vaciar el carrito cuando el componente se monte
    clearCart();

    // Agregar un listener para vaciar el carrito si el usuario recarga o sale de la página
    window.onbeforeunload = () => {
      clearCart();
    };

    // Redirigir al usuario si sale de la página
    return () => {
      window.onbeforeunload = null; // Limpiar el listener cuando el componente se desmonte
    };
  }, [orderId, cartItems, shippingData, totalAmount, clearCart]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Confirmación de Compra</h1>

      {orderId && (
        <div className="mb-4 text-green-600 font-medium">
          Tu número de orden es: <span className="font-bold">{orderId}</span>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Resumen de Productos</h3>
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
        <div className="text-right font-semibold mt-4">Total: ${totalAmount.toFixed(0)}</div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Datos de Envío</h3>
        <p>Nombre: {shippingData.name}</p>
        <p>Dirección: {shippingData.address}</p>
        <p>Ciudad: {shippingData.city}</p>
        <p>País: {shippingData.country}</p>
        <p>Teléfono: {shippingData.phone}</p>
        <div className='mt-2'>
          <Button text="ver Orden" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionPage;
