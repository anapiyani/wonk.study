import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosEmail from '../config/axiosEmailConfig';
import { TEmailMessage } from '../types/types';

const initialState = {}

export const sendMessageEmail = createAsyncThunk(
  'email/sendMessageEmail',
  async (body: TEmailMessage, { rejectWithValue }) => {
    try {
      const response = await axiosEmail.post('send_email', body);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error("Server error:", error.response.data);
        return rejectWithValue(error.response.data);
      }
    }
  }
);

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {}
});

export default emailSlice.reducer;
