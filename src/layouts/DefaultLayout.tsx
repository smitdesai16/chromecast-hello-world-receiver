import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const DefaultLayout = () => {
	const theme = useTheme();

	const fallbackRender = () => {
		return <p>Error</p>;
	};

	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<div style={{ maxWidth: "1440px", margin: "0 auto", boxShadow: theme.shadow8 }}>
				<Suspense fallback={<p>Loading Outlet</p>}>
					<Outlet />
				</Suspense>
			</div>
		</ErrorBoundary>
	);
};

export default DefaultLayout;