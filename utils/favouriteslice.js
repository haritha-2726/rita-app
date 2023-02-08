import { createSlice } from "@reduxjs/toolkit";

 


 const favouriteslice=createSlice({
    name:"favsec",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.items.push(action.payload)

        }
    }
   })

 export  const {additem}=favouriteslice.actions
 export default favouriteslice.reducer;  