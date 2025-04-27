// shopData.ts
import { productos } from './productos'; // Asegúrate de que la ruta de productos sea correcta

// Extraemos las categorías únicas de los productos
export const categorias = Array.from(new Set(productos.map((producto) => producto.category)));
