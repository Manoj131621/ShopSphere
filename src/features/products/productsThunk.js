import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById } from "../../api/productAPI";

export const getProducts = createAsyncThunk('products/getProducts',
    async(_,{ rejectWithValue }) => {
        try{
            return await fetchAllProducts()
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async(id, { rejectWithValue}) => {
        try{
            return await fetchProductById(id)
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)