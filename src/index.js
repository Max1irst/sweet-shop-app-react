import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productsApi } from './features/productsAPI';
import './index.css';
import App from './App';
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

