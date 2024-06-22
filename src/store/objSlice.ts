import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store.ts";




const objSlice = createSlice({
    name:"object",
    initialState:null,
    reducers:{
        setObject(state,action){
            console.log("Obj was dispatched.")
            state = action.payload;
        }
    }
})

//Selectors
export const selectObj = (state:RootState) => state.object

export const  {setObject} = objSlice.actions;
export default objSlice.reducer


