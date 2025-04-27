import { useState } from 'react';
import SidebarFilters from '../components/shop/SidebarFilters';
import TopBar from '../components/shop/TopBar';
import ShopGrid from '../components/shop/ShopGrid';
import Pagination from '../components/Layout/Pagination';
import { productos } from '../data/productos';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortOption, setSortOption] = useState('Mas Popular');

  const filterProducts = () => {
    return productos
      .filter((producto) => {
        const matchesCategory = selectedCategory ? producto.category === selectedCategory : true;
        const price = parseFloat(producto.price.replace('$', ''));
        const matchesPrice = price >= priceRange.min && price <= priceRange.max;
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

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="flex flex-col lg:flex-row">
        <SidebarFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <div className="w-full lg:w-3/4 p-4">
          <ShopGrid productos={filterProducts()} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Shop;
