/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const ErrorBoundaryProvider = React.lazy(() => import("./ErrorBoundaryProvider"));
const ReduxProvider = React.lazy(() => import("./ReduxProvider"));
const AppWrapper = React.lazy(() => import("./AppWrapper"));
const AppRouterProvider = React.lazy(() => import("./AppRouterProvider"));

/**
 * Second Pulse is responsible for creating Redux Provider, Error Boundary and Generating React Root
 */
export async function startSecondPulse(): Promise<void> {
    const root = ReactDOM.createRoot(document.getElementById('root')!);

    root.render(
        <React.StrictMode>
            <Suspense fallback={<p>Loading ErrorBoundaryProvider, ReduxProvider, AppWrapper and AppRouterProvider</p>}>
                <ErrorBoundaryProvider>
                    <ReduxProvider>
                        <AppWrapper>
                            <AppRouterProvider />
                        </AppWrapper>
                    </ReduxProvider>
                </ErrorBoundaryProvider>
            </Suspense>
        </React.StrictMode>
    );
}