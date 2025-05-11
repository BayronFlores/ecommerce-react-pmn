import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderDetail: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.order) {
    return <div>No se encontraron detalles de la orden.</div>;
  }

  const { id, date, total, items, shippingData } = state.order;

  return (
    <div className="bg-white rounded-lg shadow-lg px-8 py-10  max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="text-gray-700 font-semibold text-lg">
            <button onClick={() => navigate(-1)} className="text-blue-500 underline mb-4">
              ← Volver
            </button>
          </div>
        </div>
        <div className="text-gray-700">
          <div className="font-bold text-xl mb-2">Detalles</div>
          <div className="text-sm">Fecha: {date}</div>
          <div className="text-sm">N° orden: {id}</div>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 pb-8 mb-8">
        <h1 className="text-2xl font-bold mb-4">Datos de Envio</h1>
        <div className="text-gray-700 mb-2">Nombre: {shippingData.name}</div>
        <div className="text-gray-700 mb-2">Direccion: {shippingData.address}</div>
        <div className="text-gray-700 mb-2">Ciudad: {shippingData.city}</div>
        <div className="text-gray-700">pais: {shippingData.country}</div>
        <div className="text-gray-700">telefono: {shippingData.phone}</div>
      </div>
      <table className="w-full text-left mb-8">
        <thead>
          <tr>
            <th className="text-gray-700 font-bold uppercase py-2">Descripcion</th>
            <th className="text-gray-700 font-bold uppercase py-2">Cantidad</th>
            <th className="text-gray-700 font-bold uppercase py-2">Precio</th>
            <th className="text-gray-700 font-bold uppercase py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr key={item.id}>
              <td className="py-4 text-gray-700">{item.name}</td>
              <td className="py-4 text-gray-700">{item.quantity}</td>
              <td className="py-4 text-gray-700">{item.priceDiscount || item.price}</td>
              <td className="py-4 text-gray-700">{item.priceDiscount || item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mb-8">
        <div className="text-gray-700 mr-2">Total:</div>
        <div className="text-gray-700 font-bold text-xl">{total}</div>
      </div>
    </div>
  );
};

export default OrderDetail;
