interface TopBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
}

const TopBar = ({ searchTerm, setSearchTerm, sortOption, setSortOption }: TopBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-6 p-4 bg-white dark:bg-gray-800 rounded shadow">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="border p-2 rounded w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">🔍</button>
      </div>

      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
        <div>
          Ordenar por:
          <select
            className="ml-2 p-2 border rounded dark:bg-gray-700"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Mas Popular</option>
            <option>Precio más bajo</option>
            <option>Precio más alto</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
