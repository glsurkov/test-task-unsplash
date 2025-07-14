import { clsx } from 'clsx';
import React from 'react';

import cls from './styles.module.scss';

type DividerOrientation = 'horizontal' | 'vertical';

interface DividerProps {
    orientation?: DividerOrientation;
    thickness?: number | string;
    className?: string;
}

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', thickness, className }: DividerProps) => {
    return (
        <div
            className={clsx(cls.divider, orientation === 'horizontal' ? cls.horizontal : cls.vertical, className)}
            style={{
                ...(orientation === 'horizontal' ? { height: thickness } : { width: thickness }),
            }}
        />
    );
};
