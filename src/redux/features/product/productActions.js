import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;



export const getAllProducts = createAsyncThunk(
    'product/getAll',
    async () => {
      try{
        console.log('Ingresando a GetAllProducts')
        console.log(BASE_URL);
        const data = (await axios.get(BASE_URL+"/api/product/")).data;
        console.log(data); 
        return data;
        
        }catch(e){
            console.error(e);
        }
    }
  )

  /*
  export const loginUser = createAsyncThunk(
    'user/login',
    async (userInfo, {rejectWithValue}) => {
      try{
        console.log('Ingresando a LoginUser')
        //const data = (await axios.post("http://192.168.1.6:9000/api/auth/login",userInfo)).data;
        const data = (await axios.post("http://192.168.1.3:9000/api/auth/login",userInfo)).data;
        
        console.log(data); 
        return data;
        
        }catch(e){
          if (e.response && e.response.data.message) {
            //console.log(e)
            return rejectWithValue(e.response.data.message)

          } else {
            return rejectWithValue(e.message)
          }
        }
    }

    */