import { configureStore } from "@reduxjs/toolkit";
import favouriteslice from "./favouriteslice";

const store=configureStore({
    reducer:{
        favsec:favouriteslice,
    }
})

export default store;