import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Category/categorySlice";
import orderReducer, { localStorageMiddleware } from "./Order/orderSlice.js";
import productReducer from "./product/productSlice";
import modalReducer from "./ModalDelivery/ModalDeliverySlice";
import newModalReducer from "./ModalDelivery/NewModalSlice";
import formReducer from "./form/formSlice";

export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modal: modalReducer,
        newmodal: newModalReducer,
        form: formReducer,
    },

    middleware: getDefaultMiddleware => 
       getDefaultMiddleware().concat(localStorageMiddleware)
   });