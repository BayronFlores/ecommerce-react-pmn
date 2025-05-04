import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountNav from '../../components/Layout/AccountNav';

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

interface Order {
  id: string;
  status: string;
  statusColor: string;
  date: string;
  total: string;
  items: CartItem[];
  shippingData: ShippingData;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');

    // Ordenar por timestamp descendente extraído de la ID
    const sortedOrders = storedOrders.sort((a: Order, b: Order) => {
      const timestampA = parseInt(a.id.replace('ORD-', ''), 10);
      const timestampB = parseInt(b.id.replace('ORD-', ''), 10);
      return timestampB - timestampA;
    });

    setOrders(sortedOrders);
  }, []);

  const handleViewDetails = (order: Order) => {
    navigate(`./${order.id}`, { state: { order } });
  };

  const handleClearOrders = () => {
    localStorage.removeItem('orderHistory');
    setOrders([]);
  };

  return (
    <div className="order-container flex">
      <AccountNav />

      <div className="content-area flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Historial de órdenes</h1>
          {orders.length > 0 && (
            <button
              onClick={handleClearOrders}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Eliminar historial
            </button>
          )}
        </div>

        {orders.length === 0 ? (
          <p>No hay órdenes registradas.</p>
        ) : (
          <div className="order-table-container overflow-auto">
            <table className="order-table w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">ORDEN ID</th>
                  <th className="px-4 py-2">ESTADO</th>
                  <th className="px-4 py-2">FECHA</th>
                  <th className="px-4 py-2">TOTAL</th>
                  <th className="px-4 py-2">ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2" style={{ color: order.statusColor }}>
                      {order.status}
                    </td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.total}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleViewDetails(order)}
                        className="text-blue-600 hover:underline"
                      >
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
