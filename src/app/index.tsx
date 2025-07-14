import clsx from 'clsx';
import { Suspense } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { Loader } from '@/shared/ui/feedback';

import { Routing, publicRoutes } from './routing';
import { StoreProvider } from './store';
import './styles/index.scss';

export function App() {
    return (
        <StoreProvider>
            <Suspense fallback={<Loader widthContainer="100dvw" heightContainer="100dvh" />}>
                <div className={clsx('app')}>
                    <Routing routes={publicRoutes} />
                </div>
            </Suspense>
        </StoreProvider>
    );
}
