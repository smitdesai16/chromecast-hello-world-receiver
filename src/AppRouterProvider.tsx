import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Urls } from "./constants/urls";
const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));
const Home = React.lazy(() => import("./pages/Home"));

export default function AppRouterProvider(): JSX.Element {
	const router = createBrowserRouter([
		{
			path: Urls.Home,
			element: (
				<Suspense fallback={<p>Loading Layout</p>}>
					<DefaultLayout />
				</Suspense>
			),
			children: [
				{
					path: Urls.Home,
					element: (
						<Suspense fallback={<p>Loading Home</p>}>
							<Home />
						</Suspense>
					),
				},
				{
					path: Urls.BasePage,
					element: <p>404 Page</p>,
				},
			],
		},
		{
			path: Urls.BasePage,
			element: <p>404 Page</p>,
		},
	]);

	return <RouterProvider router={router} />;
}