import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const HelloWorld = React.lazy(() => import("../components/HelloWorld"));

const Home = () => {
    const fallbackRender = () => {
        return <p>Error</p>;
    };

	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<Suspense fallback={<p>Loading Hello World</p>}>
				<HelloWorld />
			</Suspense>
		</ErrorBoundary>
	);
};

export default Home;