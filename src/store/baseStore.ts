import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventReducer";
import applicationDetailReducer from "./applicationDetailReducer";
import messageReducer from "./messageReducer";
import senderReducer from "./senderReducer";

export const BaseStore = configureStore({
	reducer: {
		event: eventReducer,
		applicationDetail: applicationDetailReducer,
		message: messageReducer,
		sender: senderReducer,
	},
});

export type RootState = ReturnType<typeof BaseStore.getState>;
export type AppDispatch = typeof BaseStore.dispatch;