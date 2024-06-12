import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";
import { TStudent } from "../types/types";

type TInitialState = {
  students: TStudent[];
  students_loading: boolean;
  error: string | null;
};

const initialState: TInitialState = {
  students: [],
  students_loading: false,
  error: null,
};

export const getStudentsByGrade = createAsyncThunk(
  "students/getStudentsByGrade",
  async ({
    grade_level,
    section,
  }: {
    grade_level: string;
    section: string;
  }) => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosWonk.get(
      `/courses/get-students/${grade_level}/${section}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsByGrade.pending, (state) => {
        state.students_loading = true;
      })
      .addCase(getStudentsByGrade.fulfilled, (state, action) => {
        state.students_loading = false;
        state.students = action.payload;
      })
      .addCase(getStudentsByGrade.rejected, (state, action) => {
        state.students_loading = false;
        state.error = "Ошибка при получении данных" || action.error.message;
      });
  },
});

export default studentsSlice.reducer;
