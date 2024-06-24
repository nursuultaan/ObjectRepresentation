import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store.ts";




const objSlice = createSlice({
    name:"object",
    initialState:{
        obj:null
    },
    reducers:{
        setObject(state,action){
            console.log("Obj was dispatched.")
            state.obj = action.payload;
        }
    }
})

//Selectors
export const selectObj = (state:RootState) => state.object.obj

export const  {setObject} = objSlice.actions;
export default objSlice.reducer


