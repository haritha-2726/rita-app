import { configureStore } from "@reduxjs/toolkit";
import favouriteslice from "./favouriteslice";
 import cartslice from "./cartslice";

const store=configureStore({
    reducer:{
        favsec:favouriteslice,
        cart:cartslice,

    }
})

export default store;