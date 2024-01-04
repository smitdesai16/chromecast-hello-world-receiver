import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SenderState {
	senders: string[];
}

const initialState: SenderState = {
	senders: [],
};

export const senderSlice = createSlice({
	name: "sender",
	initialState,
	reducers: {
		updateSenderAction: (state, action: PayloadAction<SenderState["senders"]>) => {
			state.senders = action.payload;
		},
	},
});

export const { updateSenderAction } = senderSlice.actions;

export default senderSlice.reducer;