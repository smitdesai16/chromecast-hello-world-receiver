import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ApplicationDetail = React.lazy(() => import("../components/ApplicationDetail"));
const Senders = React.lazy(() => import("../components/Senders"));
const Messages = React.lazy(() => import("../components/Messages"));
const Events = React.lazy(() => import("../components/Events"));

const Home = () => {
    const fallbackRender = () => {
        return <p>Error</p>;
    };

	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<div style={{ display: "grid", width: "100%", gridTemplateColumns: "repeat(2, 1fr)", wordBreak: "break-all" }}>
				<Suspense fallback={<p>Loading Application Detail</p>}>
					<ApplicationDetail />
				</Suspense>
				<Suspense fallback={<p>Loading Senders</p>}>
					<Senders />
				</Suspense>
				<Suspense fallback={<p>Loading Messages</p>}>
					<Messages />
				</Suspense>
				<Suspense fallback={<p>Loading Events</p>}>
					<Events />
				</Suspense>
			</div>
		</ErrorBoundary>
	);
};

export default Home;