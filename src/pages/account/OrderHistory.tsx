import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountNav from '@/components/Layout/AccountNav';

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
    <div className="order-container flex flex-row gap-4">
      <AccountNav />
      <div className="flex justify-center">
        <div className="bg-white w-full dark:bg-slate-900 rounded-xl shadow-lg m-4 ">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                Historial de Ordenes
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Completado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Pendiente</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {orders.length > 0 && (
                      <button
                        onClick={handleClearOrders}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                      >
                        Eliminar historial
                      </button>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {orders.length === 0 ? (
            <p>No hay órdenes registradas.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Oden ID
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Fecha
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Estado
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Total
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Detalle de compra
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-100 to-slate-100 dark:from-violet-900 dark:to-slate-800 flex items-center justify-center">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300"></span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                              {order.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {order.date}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>{' '}
                          {order.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {order.total}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            <button
                              onClick={() => handleViewDetails(order)}
                              className="text-blue-600 hover:underline"
                            >
                              Detalles
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
