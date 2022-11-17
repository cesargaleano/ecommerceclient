import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './productActions';




const initialState = {
    productsList: [],
    loading:false,
    success:false,
    error: null

    
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    },
    extraReducers:{
        
    [getAllProducts.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [getAllProducts.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.productsList = payload
        
      },
    [getAllProducts.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.userToken= null
      },



    }

});

export default productSlice.reducer;