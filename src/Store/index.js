import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Category/categorySlice";
import orderReducer, { localStorageMiddleware } from "./Order/orderSlice.js";
import productReducer from "./product/productSlice";
import modalReducer from "./ModalDelivery/ModalDeliverySlice";

export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modal: modalReducer,
    },

    middleware: getDefaultMiddleware => 
       getDefaultMiddleware().concat(localStorageMiddleware)
   });