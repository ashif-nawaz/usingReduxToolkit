import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items : [],
    totalAmount : 0
}


const cartSlice = createSlice({
     name : "cartSlice",
     initialState : INITIAL_STATE,
     reducers : {
        addToCart(state, action) {
            const oldItem = state.items.find((item) => {
                return item.id === action.payload.id;
            })
            if(oldItem) {
                return;
            }
            state.items.push(action.payload);
        }, 
        removeFromCart(state, action) {
            const id = action.payload.id;
            const index = state.items.findIndex((item) => {
                return item.id === id;
            })
            state.items.splice(index, 1);
        }
     }
})


export const cartActions = cartSlice.actions; 
export default cartSlice.reducer;