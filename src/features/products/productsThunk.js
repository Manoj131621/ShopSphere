import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../api/productAPI";

export const getProducts = createAsyncThunk('products/getProducts',
    async(_,{ rejectWithValue }) => {
        try{
            return await fetchAllProducts()
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)