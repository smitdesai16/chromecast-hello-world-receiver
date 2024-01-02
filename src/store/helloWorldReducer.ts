import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface HelloWorldState {
	message: string;
	sender: string;
}

const initialState: HelloWorldState = {
	message: "Hello World",
	sender: "unknown",
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
	},
});

export const { updateMessageAction, updateSenderAction } = userSlice.actions;

export default userSlice.reducer;