import { Landing } from '@/pages/landing';

import { getPublicPaths } from '@/shared/routing';

import { Route } from './routing.tsx';

export const publicRoutes: Route[] = [
    {
        path: getPublicPaths.landing(),
        element: <Landing />,
        isDefault: true,
    },
];
