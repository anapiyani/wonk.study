import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosLogin from "../config/axiosLoginConfig";
import { TLoginUser } from "../types/types";

type TInitialState = {
  isLoading: boolean;
  isError: string | null;
  isSuccess: boolean;
};

const initialState: TInitialState = {
  isLoading: false,
  isError: null,
  isSuccess: false,
};

export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (body: TLoginUser) => {
    const response = await axiosLogin.post("/users/user/login/", body);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetSuccess(state) {
      state.isSuccess = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginPost.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = null;
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError =
          "Упс, неправильный логин или пароль. Попробуйте ещё раз." ||
          action.error.message;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = null;
        const token = action.payload.access;
        if (token) {
          localStorage.setItem("accessToken", token);
        }
      });
  },
});

export const { resetSuccess } = loginSlice.actions;
export default loginSlice.reducer;
