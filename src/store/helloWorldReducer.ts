import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface HelloWorldState {
	message: string;
	sender: string;

	eventName: string;
	eventDetail: string;
}

const initialState: HelloWorldState = {
	message: "Hello World",
	sender: "unknown",
	eventName: "<empty>",
	eventDetail: "<empty>"
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateMessageAction: (state, action: PayloadAction<HelloWorldState["message"]>) => {
			state.message = action.payload;
		},
		updateSenderAction: (state, action: PayloadAction<HelloWorldState["sender"]>) => {
			state.sender = action.payload;
		},
		updateEventNameAction: (state, action: PayloadAction<HelloWorldState["eventName"]>) => {
			state.eventName = action.payload;
		},
		updateeventDetailAction: (state, action: PayloadAction<HelloWorldState["eventDetail"]>) => {
			state.eventDetail = action.payload;
		},
	},
});

export const { updateMessageAction, updateSenderAction, updateEventNameAction, updateeventDetailAction } = userSlice.actions;

export default userSlice.reducer;