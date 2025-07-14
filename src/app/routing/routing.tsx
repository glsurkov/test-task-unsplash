import { Suspense } from 'react';
import {
    Navigate,
    Route as RouteElement,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import { Loader } from '@/shared/ui/feedback';

export type Route = {
    path: string;
    element: React.ReactNode;
    isDefault?: boolean;
    isAdmin?: boolean;
};

interface Props {
    routes: Route[];
}

export const Routing = ({ routes }: Props) => {
    const defaultRoute = routes.find((route) => route?.isDefault);

    const elements = (
        <>
            {routes.map((route) => (
                <RouteElement path={route.path} element={route.element} key={route.path} />
            ))}
            {defaultRoute?.path && <RouteElement path="*" element={<Navigate to={defaultRoute.path} replace />} />}
        </>
    );

    const router = createBrowserRouter(createRoutesFromElements(elements));

    return (
        <Suspense fallback={<Loader widthContainer="100dvw" heightContainer="100dvh" />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
