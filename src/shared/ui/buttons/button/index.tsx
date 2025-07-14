import clsx from 'clsx';
import { ButtonHTMLAttributes, Ref } from 'react';

import { Loader, LoaderProps } from '@/shared/ui/feedback';

import styles from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'filled' | 'clear';
    color?: 'primary';
    ref?: Ref<HTMLButtonElement>;
    isLoading?: boolean;
    loaderColor?: LoaderProps['color'];
};

export const Button = ({
    variant = 'filled',
    type = 'button',
    className,
    ref,
    children,
    disabled,
    isLoading = false,
    color = 'primary',
    loaderColor = 'black',
    ...props
}: Props) => {
    return (
        <button
            ref={ref}
            className={clsx(
                styles.button,
                styles[`variant-${variant}`],
                styles[`color-${color}`],
                { [styles.disabled]: disabled },
                className,
            )}
            type={type}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? <Loader heightLoader={20} color={loaderColor} /> : children}
        </button>
    );
};
