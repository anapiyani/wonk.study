import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./email.slice";
import loginReducer from "./login.slice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
