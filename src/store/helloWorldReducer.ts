import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface HelloWorldState {
	title: string;
}

const initialState: HelloWorldState = {
	title: "Hello World 2",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateTextAction: (state, action: PayloadAction<HelloWorldState["title"]>) => {
			state.title = action.payload;
		},
	},
});

export const { updateTextAction } = userSlice.actions;

export default userSlice.reducer;