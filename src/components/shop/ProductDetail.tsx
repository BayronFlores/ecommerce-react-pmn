import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../data/productos';
import { CartContext } from '../../context/CartContext'; // Asegúrate de importar tu contexto
import { notifySuccess } from '../../utils/toastConfig';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const producto = productos.find((p) => p.id === Number(id));
  const cartContext = useContext(CartContext);

  if (!producto) {
    return <div className="text-center text-red-500">Producto no encontrado</div>;
  }

  if (!cartContext) {
    return <div className="text-center text-red-500">CartContext no disponible</div>;
  }

  const { addToCart } = cartContext;

const handleAddToCart = () => {
  addToCart({
    id: producto.id,
    name: producto.name,
    price: Number(producto.price.replace('$', '')), // El precio estaba como string "$36"
    quantity: 1,
    image: producto.image,
    subtotal: Number(producto.price.replace('$', '')),
    priceDiscount: producto.priceDiscount ?? null, // Asignar null si no hay descuento
    porDiscount: producto.porDiscount ?? 0, // Asignando un valor por defecto si no existe
  });

  notifySuccess('Producto agregado al carrito!');
};

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sección de imagen */}
      <div className="flex flex-col items-center">
        <img src={producto.image} alt={producto.name} className="w-full object-cover rounded-lg" />

        {/* Carrusel de miniaturas */}
        <div className="flex mt-4 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer">
              <img
                src={producto.image}
                alt={`Miniatura ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sección de detalles */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{producto.name}</h2>
          <p className="text-sm text-gray-500">({producto.reviews} Comentarios de usuarios)</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">{producto.priceDiscount}</span>
          {producto.priceDiscount && (
            <>
              <span className="text-sm line-through text-gray-400">{producto.price}</span>
              <span className="text-sm text-green-600 font-semibold">
                {producto.porDiscount}% DE DESCUENTO
              </span>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {/* Color, descripción, etc. */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Color:</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-400 border cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción del producto</h3>
            <p className="text-gray-600 leading-relaxed">
              {producto.name} es una excelente opción en la categoría de {producto.category}.
            </p>
          </div>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex gap-2">
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow">
              Comprar Ahora
            </button>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-md"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 text-sm mb-2">100% de garantía Pago seguro</p>
          <div className="flex gap-2">
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
            <div className="w-10 h-6 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
      {/* Características del producto */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Características del producto</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Alta calidad y durabilidad.</li>
          <li>Diseño moderno y funcional.</li>
          <li>Excelente relación calidad-precio.</li>
          <li>Garantía de satisfacción del cliente.</li>
          <li>Ideal para uso diario o profesional.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
