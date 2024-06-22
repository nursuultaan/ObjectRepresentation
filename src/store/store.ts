import {configureStore} from "@reduxjs/toolkit";
import objReducer from './objSlice.ts'
export const store = configureStore({
    reducer:{
        object : objReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
