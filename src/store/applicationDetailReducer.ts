import { createSlice } from "@reduxjs/toolkit";

export interface ApplicationDetailState {
	applicationId: string;
	launchedFrom: string;
	launchingSenderId: string;
	name: string;
	namespaces: Array<string>;
	sessionId: number;
	deviceCapabilities: object;
}

const initialState: ApplicationDetailState = {
	applicationId: "",
	launchedFrom: "",
	launchingSenderId: "",
	name: "",
	namespaces: [],
	sessionId: 0,
	deviceCapabilities: {}
};

export const messageSlice = createSlice({
	name: "applicationDetail",
	initialState,
	reducers: {
		addApplicationDataAction: (state, action) => {
			state.applicationId = action.payload.id;
			state.launchedFrom = action.payload.launchedFrom;
			state.launchingSenderId = action.payload.launchingSenderId;
			state.name = action.payload.name;
			state.namespaces = action.payload.namespaces;
			state.sessionId = action.payload.sessionId;
		},
		addDeviceCapabilitiesAction: (state, action) => {
			state.deviceCapabilities = action.payload;
		},
	},
});

export const { addApplicationDataAction, addDeviceCapabilitiesAction } = messageSlice.actions;

export default messageSlice.reducer;