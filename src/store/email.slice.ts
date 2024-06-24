import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosEmail from "../config/axiosEmailConfig";
import { TEmailMessage } from "../types/types";

const initialState = {};

export const sendMessageEmail = createAsyncThunk(
  "email/sendMessageEmail",
  async (body: TEmailMessage) => {
    try {
      const response = await axiosEmail.post("/send_email", body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
});

export default emailSlice.reducer;
