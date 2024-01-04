import { createSlice } from "@reduxjs/toolkit";

export interface EventState {
	events: string[];
}

const initialState: EventState = {
	events: [],
};

export const eventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {
		addEventAction: (state, action) => {
			state.events.unshift(action.payload);
		},
	},
});

export const { addEventAction } = eventSlice.actions;

export default eventSlice.reducer;