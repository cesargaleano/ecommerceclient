import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    shoppingList: [],
    loading:false,
    success:false,
    error: null

    
};

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers:{
     updateShoppingCart:(state, action)=>{
        state.shoppingList= action.payload;
     },
     clearShoppingCart:(state, action)=>{
        state.shoppingList= [];
     },
       

    },
    extraReducers:{
        
    
    }

});

export default shoppingCartSlice.reducer;
export const {addShoppingCart, clearShoppingCart, updateShoppingCart } = shoppingCartSlice.actions