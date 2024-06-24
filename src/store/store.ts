import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './email.slice';
const store = configureStore({
    reducer: {
        email: emailReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;