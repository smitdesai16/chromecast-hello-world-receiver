import { createSlice } from "@reduxjs/toolkit";

export interface HelloWorldState {
	messages: string[];
}

const initialState: HelloWorldState = {
	messages: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addMessagesAction: (state, action) => {
			const message = action.payload;
			state.messages.push(message);
		},
	},
});

export const { addMessagesAction } = userSlice.actions;

export default userSlice.reducer;