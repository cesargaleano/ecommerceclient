import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';
import shoppingCartReducer from './features/shoppinCart/shoppingCartSlice'
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    auth: authReducer
  },
});