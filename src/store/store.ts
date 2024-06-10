import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./email.slice";
import loginReducer from "./login.slice";
import infoReducer from "./info.slice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    login: loginReducer,
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
