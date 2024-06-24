import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";
import { TSubjectClasses } from "../types/types";

type TInitialState = {
  subjectClasses: TSubjectClasses[];
  subjectLoading: boolean;
  isError: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  subjectName: string | null;
};

const initialState: TInitialState = {
  subjectClasses: [],
  subjectLoading: false,
  isError: null,
  isLoading: false,
  isSuccess: false,
  subjectName: null,
};

const bearer = localStorage.getItem("accessToken");

export const subjectInfo = createAsyncThunk(
  "subject/subjectInfo",
  async (course_id: string | undefined) => {
    const response = await axiosWonk.get(`/courses/${course_id}/`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
    return response.data;
  }
);

export const gradesSubject = createAsyncThunk("info/gradesSubject", async (course_id: number) => {
  const token = localStorage.getItem("accessToken");
  const response = await axiosWonk.get(`/courses/teacher-classes/${course_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(gradesSubject.pending, (state) => {
        state.subjectLoading = true;
      })
      .addCase(gradesSubject.rejected, (state, action) => {
        state.isError =
          "Ошибка при получении данных, попробуйте перезагрузить страницу!" || action.error.message;
        state.subjectLoading = false;
      })
      .addCase(gradesSubject.fulfilled, (state, action: PayloadAction<TSubjectClasses[]>) => {
        state.subjectClasses = action.payload;
        state.subjectLoading = false;
      })
      .addCase(subjectInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subjectInfo.rejected, (state, action) => {
        state.isError = "Error getting subject info" || action.error.message;
      })
      .addCase(subjectInfo.fulfilled, (state, action) => {
        state.subjectName = action.payload.name;
      });
  },
});

export default subjectSlice.reducer;
