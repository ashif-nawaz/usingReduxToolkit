import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import authReducer from "./auth-slice";


const store = configureStore({
    reducer : {
        auth : authReducer,
        cart : cartReducer
    }
})


export default store;