import { configureStore } from '@reduxjs/toolkit';
import MyProductReducer from '../reduxToolKit/productSlice';
import MyCartReducer from '../reduxToolKit/cartslice'

export const mystore = configureStore({
  reducer: {
    product:MyProductReducer,
    cart:MyCartReducer,
  },
})


