import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderDetail: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.order) {
    return <div>No se encontraron detalles de la orden.</div>;
  }

  const { id, status, statusColor, date, total, items, shippingData } = state.order;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button onClick={() => navigate(-1)} className="text-blue-500 underline mb-4">← Volver</button>
      <h1 className="text-2xl font-semibold mb-4">Detalles de la Orden {id}</h1>

      <div className="mb-6">
        <p><strong>Estado:</strong> <span style={{ color: statusColor }}>{status}</span></p>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Total:</strong> {total}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Productos:</h2>
        <ul className="space-y-2">
          {items.map((item: any) => (
            <li key={item.id} className="flex justify-between border-b pb-1">
              <span>{item.name} (x{item.quantity})</span>
              <span>{item.priceDiscount || item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Datos de Envío:</h2>
        <p>Nombre: {shippingData.name}</p>
        <p>Dirección: {shippingData.address}</p>
        <p>Ciudad: {shippingData.city}</p>
        <p>País: {shippingData.country}</p>
        <p>Teléfono: {shippingData.phone}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
