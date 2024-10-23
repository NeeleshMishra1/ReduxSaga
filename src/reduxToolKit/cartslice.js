import { createSlice } from "@reduxjs/toolkit";

const MyCartslice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            const myIndex = state.findIndex((item) => item.id === action.payload.id);
            if (myIndex === -1) {
                state.push({ ...action.payload, qty: 1 });
            } else {
                state[myIndex].qty += 1;
            }
        },
        removeMyCartItem(state, action) {
            const myIndex = state.findIndex((item) => item.id === action.payload.id);
            if (myIndex !== -1) {
                if (state[myIndex].qty > 1) {
                    state[myIndex].qty -= 1;
                } else {
                    state.splice(myIndex, 1);
                }
            }
        }
    }
});

export const { addProductToMyCart, removeMyCartItem } = MyCartslice.actions;
export default MyCartslice.reducer;
