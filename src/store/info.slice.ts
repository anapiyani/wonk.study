import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";

const initialState = {};

export const accessPermission = createAsyncThunk(
  "login/accessPermission",
  async (token: string | null) => {
    const response = await axiosWonk.get("/users/user-by-token/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
});

export default infoSlice.reducer;
