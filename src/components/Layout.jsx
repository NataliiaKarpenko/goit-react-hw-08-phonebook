import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppBar } from './AppBar/AppBar';
import { Footer } from './Footer/Footer';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </>
  );
};
