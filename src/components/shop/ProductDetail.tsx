import React from 'react';

const ProductDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sección de imagen */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/500x300" // Cambia esta URL por la imagen real
          alt="Producto"
          className="w-full object-cover rounded-lg"
        />

        {/* Carrusel de miniaturas */}
        <div className="flex mt-4 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer">
              <img
                src="https://via.placeholder.com/80"
                alt={`Miniatura ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sección de detalles */}
      <div className="flex flex-col gap-4">
        {/* Título y calificación */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Apple MacBook Pro 2020 con chip Apple M1
          </h2>
          <p className="text-sm text-gray-500">(21,671 Comentarios de usuarios)</p>
        </div>

        {/* Precio */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">$1699</span>
          <span className="text-sm line-through text-gray-400">$1999</span>
          <span className="text-sm text-green-600 font-semibold">21% DE DESCUENTO</span>
        </div>

        {/* Opciones de compra */}
        <div className="flex flex-col gap-2">
          {/* Color */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Color:</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400 border cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border cursor-pointer"></div>
            </div>
          </div>

          {/* Memoria */}
          <div>
            <label className="font-semibold text-gray-700">Memoria:</label>
            <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Memoria unificada de 16 GB</option>
              {/* Puedes agregar más opciones */}
            </select>
          </div>

          {/* Almacenamiento */}
          <div>
            <label className="font-semibold text-gray-700">Almacenamiento:</label>
            <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Almacenamiento SSD de 1TB</option>
            </select>
          </div>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-md">
            <button className="px-3 py-1 text-xl">-</button>
            <span className="px-4">1</span>
            <button className="px-3 py-1 text-xl">+</button>
          </div>

          {/* Botones */}
          <div className="flex gap-2">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow">
              Añadir a la tarjeta
            </button>
            <button className="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-md">
              Cómpralo ahora
            </button>
          </div>
        </div>

        {/* Extras */}
        <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm">
          <button>Añadir a la lista de deseos</button>
          <button>Agregar para comparar</button>
          <button>Compartir producto</button>
        </div>

        {/* Métodos de pago */}
        <div className="mt-6">
          <p className="text-gray-600 text-sm mb-2">100% de garantía Pago seguro</p>
          <div className="flex gap-2">
            {/* Aquí colocarías los logos de VISA, PayPal, MasterCard, etc */}
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
