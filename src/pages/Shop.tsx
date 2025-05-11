import { useState } from 'react';
import SidebarFilters from '@/components/shop/SidebarFilters';
import TopBar from '@/components/shop/TopBar';
import ShopGrid from '@/components/shop/ShopGrid';
import Pagination from '@/components/Layout/Pagination';
import { productos } from '@/data/productos';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<{ min: number | ''; max: number | '' }>({
    min: '',
    max: '',
  });
  const [sortOption, setSortOption] = useState('Mas Popular');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filterProducts = () => {
    return productos
      .filter((producto) => {
        const matchesCategory = selectedCategory ? producto.category === selectedCategory : true;
        const price = parseFloat(producto.price.replace('$', ''));

        const matchesMin = priceRange.min === '' || price >= priceRange.min;
        const matchesMax = priceRange.max === '' || price <= priceRange.max;

        const matchesPrice = matchesMin && matchesMax;
        const matchesSearch = producto.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesPrice && matchesSearch;
      })
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        if (sortOption === 'Precio más bajo') return priceA - priceB;
        if (sortOption === 'Precio más alto') return priceB - priceA;
        if (sortOption === 'Mas Popular') return b.reviews - a.reviews;
        return 0;
      });
  };

  const filteredProducts = filterProducts();
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-700 dark:text-white p-4">
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="flex flex-col lg:flex-row">
        <SidebarFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1); // Reinicia paginación al filtrar
          }}
          priceRange={priceRange}
          setPriceRange={(range) => {
            setPriceRange(range);
            setCurrentPage(1); // Reinicia paginación al filtrar
          }}
        />
        <div className="w-full lg:w-3/4 p-4">
          <ShopGrid
            productos={paginatedProducts}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
