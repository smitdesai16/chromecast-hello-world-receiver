import React from "react";
import { ErrorBoundary } from "react-error-boundary";

interface IProps {
	children: React.ReactNode;
}

export default function ErrorBoundaryProvider({ children }: IProps): JSX.Element {
	const fallbackRender = () => {
		return <p>Error</p>;
	};

	return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
}