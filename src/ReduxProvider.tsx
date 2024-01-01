import React from "react";
import { Provider } from "react-redux";
import { BaseStore } from "./store/baseStore";

interface IProps {
	children: React.ReactNode;
}

export default function ReduxProvider({ children }: IProps): JSX.Element {
	return <Provider store={BaseStore}>{children}</Provider>;
}