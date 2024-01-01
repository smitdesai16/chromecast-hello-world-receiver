import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";

export const BaseStore = configureStore({
	reducer: {
		user: UserReducer,
	},
});

export type RootState = ReturnType<typeof BaseStore.getState>;
export type AppDispatch = typeof BaseStore.dispatch;