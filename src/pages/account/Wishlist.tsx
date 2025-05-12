import { useWishlist } from '@/context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="p-2">PRODUCTS</th>
            <th className="p-2">PRICE</th>
            <th className="p-2">STOCK STATUS</th>
            <th className="p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id} className="border-t text-sm">
              <td className="p-2 flex items-center gap-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                {item.name}
              </td>
              <td className="p-2">
                {item.priceDiscount ? (
                  <>
                    <span className="line-through text-gray-400">${item.price}</span>{' '}
                    <span>${item.priceDiscount}</span>
                  </>
                ) : (
                  `$${item.price}`
                )}
              </td>
              <td
                className={`p-2 font-semibold ${
                  item.status === 'Available' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {item.status}
              </td>
              <td className="p-2">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
