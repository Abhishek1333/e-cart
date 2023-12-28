import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[], //wishlist may have more than one item
    reducers:{
        //actions
        //functions logic to add items into wishlist array
        addToWishlist:(state,action)=>{
           state.push(action.payload)
        },
        //fn to remove item
        removeFromWishlist:(state,action)=>{
           return  state.filter(item=>item.id!=action.payload)
        }
    }
})
export const{addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer