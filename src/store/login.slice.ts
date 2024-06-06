import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosLogin from '../config/axiosLoginConfig';
import { TLoginUser } from '../types/types';


const initialState = {}

export const loginPost = createAsyncThunk(
  'login/loginPost',
  async (body: TLoginUser) => {
    const response = await axiosLogin.post('/users/user/login/', body);
    console.log(response);
  }
);

const loginSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {}
});

export default loginSlice.reducer;
