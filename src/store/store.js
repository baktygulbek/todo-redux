import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import { moduleSlice } from "./moduleSlice";


export const store = configureStore({
    reducer: {
        tasks:taskSlice.reducer,
        module:moduleSlice.reducer
    }
})