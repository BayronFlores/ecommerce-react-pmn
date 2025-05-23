import Button from '@/components/UI/Button';
import { useNavigate } from 'react-router-dom';

interface Producto {
  id: number;
  name: string;
  price: string;
  priceDiscount: string | null;
  porDiscount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  status: 'Available' | 'Sold Out';
}

interface ShopGridProps {
  productos: Producto[];
  className?: string; 
}

const ShopGrid = ({ productos, className }: ShopGridProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (producto: Producto) => {
    navigate(`/Tienda/${producto.id}`);
  };

  return (
    <div
      className={
        className
          ? className
          : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'
      }
    >
      {productos.map((producto) => (
        <div
          key={producto.id}
          className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg w-full h-60 object-contain"
              src={producto.image}
              alt={producto.name}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {producto.name}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">{'★'.repeat(producto.rating)}</span>
                <span className="text-gray-300 dark:text-gray-600">
                  {'☆'.repeat(5 - producto.rating)}
                </span>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                {producto.reviews} reseñas
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {producto.priceDiscount ? (
                  <>
                    <span className="text-2xl font-bold text-blue-600">
                      {producto.priceDiscount}
                    </span>
                    <span className="text-sm line-through text-gray-400">{producto.price}</span>
                    <span className="text-sm text-green-600 font-semibold">
                      {producto.porDiscount}%
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-blue-600">{producto.price}</span>
                )}
              </div>
              <Button text="Ver más" onClick={() => handleButtonClick(producto)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopGrid;
