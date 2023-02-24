import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Category/categorySlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product: productReducer,

    },
    })