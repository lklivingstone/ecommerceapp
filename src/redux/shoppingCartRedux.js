import { createSlice } from "@reduxjs/toolkit"

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const found= state.products.findIndex(find=> find._id === action.payload._id)
            if (found!==-1) {
                state.products[found].totalItems+= action.payload.totalItems;
                state.total += action.payload.price * action.payload.totalItems;
            }
            else {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.totalItems;
            }
        },
        deleteProduct: (state, action) => {
            state.products= state.products.filter(({_id}) => _id !== action.payload._id)
            state.quantity -= 1
            state.total -= action.payload.price * action.payload.totalItems;
        }
    }
})

export const { addProduct, deleteProduct } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer