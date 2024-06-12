import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./email.slice";
import loginReducer from "./login.slice";
import infoReducer from "./info.slice";
import studentsReducer from "./students.slice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    login: loginReducer,
    info: infoReducer,
    students: studentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
