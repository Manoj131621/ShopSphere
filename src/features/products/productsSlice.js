import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
})

export default productsSlice.reducer