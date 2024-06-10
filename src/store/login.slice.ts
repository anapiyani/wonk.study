import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosLogin from "../config/axiosLoginConfig";
import { TLoginUser } from "../types/types";

type TInitialState = {
  isLogin: boolean;
  isError: string | null;
  isSuccess: boolean;
};

const initialState: TInitialState = {
  isLogin: false,
  isError: null,
  isSuccess: false,
};

export const loginPost = createAsyncThunk(
  "login/loginPost",
  async (body: TLoginUser) => {
    const response = await axiosLogin.post("/users/user/login/", body);
    // Nachdem Sie die Daten abgerufen haben, müssen Sie refresh und access speichern und zur Startseite umleiten)
    console.log(response);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    resetSuccess(state) {
      state.isSuccess = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginPost.pending, (state) => {
        state.isLogin = true;
        state.isSuccess = false;
        state.isError = null;
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.isLogin = false;
        state.isSuccess = false;
        state.isError =
          "Упс, какая-то ошибка. Попробуйте еще раз" || action.error.message;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.isLogin = false;
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
