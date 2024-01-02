import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";
import helloWorldReducer from "./helloWorldReducer";

export const BaseStore = configureStore({
	reducer: {
		user: UserReducer,
		helloWorld: helloWorldReducer,
	},
});

export type RootState = ReturnType<typeof BaseStore.getState>;
export type AppDispatch = typeof BaseStore.dispatch;