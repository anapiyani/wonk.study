import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";
import { TUserInfo } from "../types/types";

type TStateInitial = {
  user: TUserInfo | null;
  isLoading: boolean;
  isError: string | null;
};

const initialState: TStateInitial = {
  user: null,
  isLoading: false,
  isError: null,
};

export const accessPermission = createAsyncThunk(
  "login/accessPermission",
  async (token: string | null) => {
    const response = await axiosWonk.get("/users/user-by-token/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(accessPermission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(accessPermission.rejected, (state, action) => {
        state.isError =
          "Ошибка при получении данных, попробуйте перезагрузить страницу!" ||
          action.error.message;
      })
      .addCase(
        accessPermission.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = null;
        }
      );
  },
});

export default infoSlice.reducer;
