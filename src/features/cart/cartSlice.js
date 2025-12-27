import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload
            const existing = state.items.find(i => i.id === item.id)
            if(existing){
                existing.quantity += 1
            }
            else {
                state.items.push({ ...item, quantity:1})
            }
        },
        removeFromCart(state, action) {
            state.items= state.items.filter(i => i.id !== action.payload)
        },
        increaseQty(state, action) {
            const item = state.items.find(i=> i.id === action.payload)
            if(item) item.quantity +=1
        },
        decreaseQty(state, action){
            const item = state.items.find( i => i.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity -= 1
            }
        },
        calculateTotals(state){
            let qty = 0
            let price = 0
            state.items.forEach(item =>{
                qty += item.quantity
                price += item.price * item.quantity
            })
            state.totalQuantity = qty
            state.totalPrice = price
            localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    calculateTotals,
} = cartSlice.actions
export default cartSlice.reducer