import clsx from 'clsx';

import { ScaledByHeight } from '@/shared/ui/misc';

import styles from './styles.module.scss';

export interface LoaderProps {
    heightContainer?: string | number;
    widthContainer?: string | number;
    classNameContainer?: string;
    heightLoader?: number;
    color?: 'black' | 'white';
    className?: string;
}

const DEFAULT_HEIGHT = 50;
const DEFAULT_WIDTH = 50;

export function Loader(props: LoaderProps) {
    const {
        heightLoader = DEFAULT_HEIGHT,
        color = 'black',
        className,
        heightContainer,
        widthContainer,
        classNameContainer,
    } = props;

    const cn = [styles.loader, styles[`color-${color}`], className];

    return (
        <div
            style={{ width: widthContainer ?? heightLoader, height: heightContainer ?? heightLoader }}
            className={clsx(styles.container, classNameContainer)}
        >
            <ScaledByHeight
                defaultHeight={DEFAULT_HEIGHT}
                defaultWidth={DEFAULT_WIDTH}
                requiredHeight={heightLoader ?? DEFAULT_HEIGHT}
            >
                <div style={{ width: `${heightLoader}px`, height: `${heightLoader}px` }}>
                    <div className={clsx(cn)} />
                </div>
            </ScaledByHeight>
        </div>
    );
}
