  import { createSlice } from "@reduxjs/toolkit";
  
  const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
              state.items.push(action.payload)
        },
         
    }

  })
  export const {additem,removeitem,clearCart}=cartslice.actions
  export default cartslice.reducer;