import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const containsObject = state.cart.some((obj) => obj.id === action.payload.product.id);
            console.log("containsObject ===== ", containsObject)
            if (containsObject === false) {
                state.cart.push(action.payload.product)
            }
            console.log('state.cart======', state.cart)

        },
        removeProductFromCart: (state, action) => {
            console.log(action.payload.product)

        },

    }
})





export const { addItemToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;


