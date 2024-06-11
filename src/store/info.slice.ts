import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";
import { TCoureses, TUserInfo } from "../types/types";

type TStateInitial = {
  user: TUserInfo | null;
  isLoading: boolean;
  isError: string | null;
  courses: TCoureses[];
};

const initialState: TStateInitial = {
  user: null,
  isLoading: false,
  isError: null,
  courses: [],
};

export const accessPermission = createAsyncThunk(
  "info/accessPermission",
  async (token: string | null) => {
    const response = await axiosWonk.get("/users/user-by-token/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const getCoureses = createAsyncThunk("info/getCourses", async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axiosWonk.get("/courses/list/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const getClasses = createAsyncThunk("info/getClasses", async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axiosWonk.get("", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
});

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
      )
      .addCase(
        getCoureses.fulfilled,
        (state, action: PayloadAction<TCoureses[]>) => {
          state.courses = action.payload;
        }
      );
  },
});

export default infoSlice.reducer;
