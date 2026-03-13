import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';

import { router } from './routes/index.jsx';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks/index.jsx';
import stripePromise from './config/stripeConfig.js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme='dark'  />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
