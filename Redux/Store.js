import { configureStore } from "@reduxjs/toolkit";
import  CartReducer  from "./Slice";
import helloWorld from "./userSlice";

export const store = configureStore({
    reducer:{
        addItem: CartReducer,
        user:helloWorld,
    }
});