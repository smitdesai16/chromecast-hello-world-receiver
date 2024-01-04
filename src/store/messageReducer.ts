import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export class Message {
	sender: string;
	message: string;

	constructor(sender: string, message: string) {
		this.sender = sender;
		this.message = message;
	}
}

export interface MessageState {
	messages: Message[];
}

const initialState: MessageState = {
	messages: [],
};

export const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		addMessageAction: (state, action: PayloadAction<Message>) => {
			state.messages.push(action.payload);
		},
	},
});

export const { addMessageAction } = messageSlice.actions;

export default messageSlice.reducer;