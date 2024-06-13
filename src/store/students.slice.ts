import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosWonk from "../config/axiosWonk";
import { TStudent, TUserInfo } from "../types/types";

type TInitialState = {
  students: TStudent[];
  students_loading: boolean;
  error: string | null;
  student_info: TUserInfo | null;
  student_loading: boolean;
  student_error: string | null;
};

const initialState: TInitialState = {
  students: [],
  students_loading: false,
  error: null,
  student_info: null,
  student_loading: false,
  student_error: null,
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

export const getStudentById = createAsyncThunk(
  "students/getStudentById",
  async (id: string | undefined) => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosWonk.get(`/users/users/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
      })
      .addCase(getStudentById.pending, (state) => {
        state.student_loading = true;
      })
      .addCase(getStudentById.rejected, (state, action) => {
        state.student_loading = false;
        state.student_error =
          "Ошибка при получении данных о студенте" || action.error.message;
      })
      .addCase(
        getStudentById.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          state.student_loading = false;
          state.student_info = action.payload;
        }
      );
  },
});

export default studentsSlice.reducer;
