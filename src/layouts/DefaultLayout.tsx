import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	const fallbackRender = () => {
		return <p>Error</p>;
	};

	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Suspense fallback={<p>Loading Outlet</p>}>
					<Outlet />
				</Suspense>
			</div>
		</ErrorBoundary>
	);
};

export default DefaultLayout;