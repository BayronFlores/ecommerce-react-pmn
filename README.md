# 🛍️ Ecommerce React - Prototipo PMN

Este es un prototipo inicial de una tienda online (**Ecommerce**) desarrollada con **React**. Forma parte del Proyecto Modular de Nivel (PMN) y tiene como objetivo demostrar la estructura base, navegación y diseño visual inicial de la aplicación.

---

## 🧪 Estructura del proyecto ¿Cómo probarlo?

## 📦 Clonación del repositorio

```bash
git clone https://github.com/BayronFlores/ecommerce-react-pmn.git
cd ecommerce-react-pmn
```

## 🛠️ Instala las dependencias y ejecutarlo:

Desde la terminal, ubicándote en la carpeta raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:

- npm install

Una vez completada la instalación, puedes iniciar el proyecto en modo desarrollo con:
- npm run dev

Esto abrirá la aplicación en http://localhost:5173

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

### 📌 Estado del proyecto

🚧 En desarrollo. Este prototipo representa una primera etapa funcional del ecommerce. Algunas funcionalidades se encuentran en construcción o sujetas a cambios.
