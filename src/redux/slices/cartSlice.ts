import { CardProps } from "@/components/ProductCard/productCard";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type CartProps = {
    count: number;
    item: CardProps;
};
const initialState: { cartItems: CartProps[] } = { cartItems: [] };

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CardProps>) => {
            state.cartItems.push({ count: 1, item: action.payload });
        },
        removeFromCart: (state, action: PayloadAction<CardProps>) => {
            const updatedArr = Array.from(state.cartItems).filter(item => item.item.id !== action.payload.id);
            state.cartItems = updatedArr;
        },
        clearCart: state => {
            if (state.cartItems.length) state.cartItems = [];
        },
        updateCount: (state, action: PayloadAction<{ id: string; count: number }>) => {
            const index = state.cartItems.findIndex(item => item.item.id === action.payload.id);
            state.cartItems[index].count = action.payload.count;
        },
    },
});
export const { addToCart, clearCart, removeFromCart, updateCount } = cartSlice.actions;
export default cartSlice.reducer;
