import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return  state.filter(item=>item.id!=action.payload)
         },
        //function to remove all items from cart
        emptyCart:(state)=>{
          return  state=[]
        } 
    }
})
export default cartSlice.reducer

export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions