import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import AppRoutes from '@/routes/AppRoutes';
import AccountRoutes from '@/routes/AccountRoutes';
import NotFound from '@/pages/NotFound';
import { CartProvider } from '@/context/CartContext';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { WishlistProvider } from '@/context/WishlistContext';
function App() {
  return (

    <WishlistProvider>
    <ThemeProvider>
      <CartProvider>
        <Fragment>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              {AppRoutes}
              <Route path="Cuenta">{AccountRoutes}</Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Fragment>
      </CartProvider>
    </ThemeProvider>
    </WishlistProvider>
  );
}

export default App;
