import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode, Ref, useMemo } from 'react';

import { generateUuid } from '@/shared/lib/math';
import { clsInputWithTopLabel } from '@/shared/ui/design-tokens';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    /** Если значение true, будет добавлен глазик для скрытия и открытия текста в input */
    ref?: Ref<HTMLInputElement>;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    className?: string;
    classNameRoot?: string;
}

export const InputText = ({
    errorMessage,
    className,
    ref,
    classNameRoot,
    leftSection,
    onChange,
    disabled,
    rightSection,
    ...restProps
}: Props) => {
    const isError = Boolean(errorMessage);

    const id = useMemo(() => generateUuid(), []);

    return (
        <div
            className={clsx(styles.root, classNameRoot, {
                [clsInputWithTopLabel.isError]: isError,
            })}
        >
            {leftSection}
            <input
                {...restProps}
                ref={ref}
                type="text"
                id={id}
                disabled={disabled}
                onChange={onChange}
                className={clsx(styles.inputContainer, className)}
            />
            {rightSection}
            {errorMessage && <p className={clsInputWithTopLabel.error}>{errorMessage}</p>}
        </div>
    );
};
