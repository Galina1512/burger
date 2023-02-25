import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./Category/categorySlice";
import orderReducer, { localStorageMiddleware } from "./Order/orderSlice.js";
import productReducer from "./product/productSlice";
 
export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
    },

    middleware: getDefaultMiddleware => 
       getDefaultMiddleware().concat(localStorageMiddleware)
   });