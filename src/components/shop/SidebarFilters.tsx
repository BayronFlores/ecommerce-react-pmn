import { categorias } from '@/data/shopData';

interface SidebarFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: { min: number | ''; max: number | '' };
  setPriceRange: (range: { min: number | ''; max: number | '' }) => void;
}

const SidebarFilters = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: SidebarFiltersProps) => {
  return (
    <div className="min-h-min lg:w-1/4 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h3 className="text-xl font-semibold mb-4">Categoría</h3>
        <ul className="space-y-2">
          {categorias.map((cat, index) => (
            <li key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                className="accent-orange-500"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              <span>{cat}</span>
            </li>
          ))}
          <li className="flex items-center space-x-2 mt-2">
            <input
              type="radio"
              name="category"
              className="accent-orange-500"
              checked={selectedCategory === ''}
              onChange={() => setSelectedCategory('')}
            />
            <span>Todos</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Precio</h3>
        <div className="flex space-x-2 mt-2">
          <input
            type="number"
            placeholder="Mínimo"
            className="w-1/2 border p-2 rounded"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                min: e.target.value === '' ? '' : Number(e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Máximo"
            className="w-1/2 border p-2 rounded"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({
                ...priceRange,
                max: e.target.value === '' ? '' : Number(e.target.value),
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
