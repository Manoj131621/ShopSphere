import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) =>{
            state.loading = true,
            state.error = null
        })
        .addCase(getProducts.fulfilled, (state,action)=> {
            state.loading = false,
            state.items = action.payload
        })
        .addCase(getProducts.rejected, (state,action)=> {
            state.loading = false,
            state.error = action.payload
        })
    }
})

export default productsSlice.reducer