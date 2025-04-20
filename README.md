# 🛍️ Ecommerce React - Prototipo PMN

Este es un prototipo inicial de una tienda online (**Ecommerce**) desarrollada con **React**. Forma parte del Proyecto Modular de Nivel (PMN) y tiene como objetivo demostrar el inicio del desarrollo con estructura, navegación y diseño básico.

---

## 🧪 Estructura del proyecto ¿Cómo probarlo?

- git clone https://github.com/tu-usuario/tu-repo.git

## 🛠️ Instala las dependencias y ejecutarlo:

en la terminal desde la carpeta raiz del proyecto de ejecuta:

- npm install
- npm run dev

## 🚀 ¿Qué incluye este prototipo?

- Navegación entre pantallas usando `react-router-dom`
- Estructura de carpetas organizada (`components`, `layout`, `pages`, `routes`)
- Páginas implementadas en esta fase:
  - Login (`/login`)
  - Dashboard de usuario (`/account`)
- Diseño visual sencillo y claro

---

## 🗺️ Estructura de navegación (plan general)

### 🔓 Público general

- `/` — Inicio con productos destacados y promociones
- `/shop` — Catálogo de productos filtrables
- `/product/:id` — Vista de detalle de un producto
- `/category/:slug` — Productos por categoría
- `/search?q=` — Resultados de búsqueda
- `/cart` — Carrito de compras
- `/checkout` — Proceso de pago y envío
- `/login` / `/register` — Acceso de usuarios
- `/contact` / `/about` — Información del negocio
- `*` — Página no encontrada (404)

### 👤 Usuario logueado

- `/account` — Panel del usuario
- `/account/orders` — Historial de compras
- `/account/addresses` — Direcciones guardadas
- `/account/payments` — Métodos de pago
- `/logout` — Cerrar sesión

### 🔧 Panel Admin (futuro)

- `/admin` — Dashboard
- `/admin/products` — Gestión de productos
- `/admin/orders` — Gestión de pedidos
- `/admin/users` — Lista de clientes
- `/admin/reports` — Reportes y estadísticas
- `/admin/settings` — Configuraciones generales

---

### 🛒 Flujo básico de compra

```plaintext
Usuario navega por /shop o /Home
 → Agrega productos al /cart
 → Procede a /checkout
 → Realiza el pago
 → Visualiza el pedido en /account/orders


```
