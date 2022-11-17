import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;



export const postAuth = createAsyncThunk(
    'auth/postAuth',
    async (authData, { rejectWithValue }) => {
      try{
        console.log('Ingresando a PostAuth')
        console.log(authData);
        const data = (await axios.post((BASE_URL+"/api/auth/login"),authData)).data;
        console.log(data);
        if(data.status==='error') return rejectWithValue(data.msg);
        return data;  
        
        }catch(e){
            console.error(e);
            return rejectWithValue(e.message); 

        }

        
    }
  )
