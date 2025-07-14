import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';

import { useWindowDimensions } from '../../../lib/dom';
import styles from './styles.module.scss';

interface Props {
    children: ReactNode;
    requiredHeight: number;
    defaultHeight: number;
    defaultWidth: number;
    className?: string;
}

/**
 * Увеличение элемента с помощью transform: scale до определенной всоты
 * без сохранения ненужных paddings
 */
export const ScaledByHeight = ({ children, defaultHeight, defaultWidth, requiredHeight, className }: Props) => {
    const [scale, setScale] = useState(1);
    const { height: windowHeight } = useWindowDimensions();

    useEffect(() => {
        setScale(requiredHeight / defaultHeight);
    }, [defaultHeight, requiredHeight, windowHeight]);

    return (
        <div
            className={styles.root}
            style={{
                width: defaultWidth * scale,
                height: defaultHeight * scale,
            }}
        >
            <div
                style={{
                    width: defaultWidth,
                    height: defaultHeight,
                    transform: `scale(${scale})`,
                }}
                className={clsx(styles.content, className)}
            >
                {children}
            </div>
        </div>
    );
};
