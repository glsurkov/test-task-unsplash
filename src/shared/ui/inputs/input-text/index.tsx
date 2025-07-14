import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { generateUuid } from '@/shared/lib/math';
import { clsInputWithTopLabel } from '@/shared/ui/design-tokens';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    /** Если значение true, будет добавлен глазик для скрытия и открытия текста в input */
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    className?: string;
    classNameRoot?: string;
}

export const InputText = ({
    errorMessage,
    className,
    classNameRoot,
    leftSection,
    onChange,
    disabled,
    rightSection,
    ...restProps
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const isError = Boolean(errorMessage);

    const id = useMemo(() => generateUuid(), []);

    const onFocus = useCallback(() => {
        setIsFocused(true);
        inputRef.current?.focus();
    }, []);

    const onBlur = useCallback(() => {
        setIsFocused(false);
        inputRef.current?.blur();
    }, []);

    return (
        <div
            className={clsx(styles.root, classNameRoot, {
                [clsInputWithTopLabel.isError]: isError,
                [styles.rootFocused]: isFocused,
            })}
            onBlur={onBlur}
            onClick={onFocus}
        >
            {leftSection}
            <input
                {...restProps}
                ref={inputRef}
                type="text"
                id={id}
                disabled={disabled}
                onChange={onChange}
                className={clsx(styles.inputContainer, className)}
            />
            {isFocused && rightSection}
            {errorMessage && <p className={clsInputWithTopLabel.error}>{errorMessage}</p>}
        </div>
    );
};
