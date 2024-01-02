import { createSlice } from "@reduxjs/toolkit";

export interface HelloWorldState {
	messages: string[];
	events: string[];
}

const initialState: HelloWorldState = {
	messages: [],
	events: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addMessageAction: (state, action) => {
			state.messages.unshift(action.payload);
		},
		addEventAction: (state, action) => {
			state.events.unshift(action.payload);
		},
	},
});

export const { addMessageAction, addEventAction } = userSlice.actions;

export default userSlice.reducer;