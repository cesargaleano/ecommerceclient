import { createSlice } from '@reduxjs/toolkit';
import { postAuth} from './authActions';




const initialState = {
    authInfo: {},
    loading:false,
    success:false,
    error: null,


    
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{

        clearError: state=>void(state.error = null),
        clearSuccess: state=>void(state.success = false),
        clearUserInfo: state=>void(state.userInfo = {})
    },
    extraReducers:{
        
    [postAuth.pending]: (state) => {
        state.loading = true
        state.error = null
      },
    [postAuth.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.authInfo = payload.other
        
      },
    [postAuth.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
        
      },



    }

});

export default authSlice.reducer;
export const { clearError, clearUserInfo, clearSuccess } = authSlice.actions