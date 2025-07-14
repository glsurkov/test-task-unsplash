import cx, { clsx } from 'clsx';
import { ReactNode } from 'react';

import { IconClose } from '@/shared/assets';
import { DOM_ELEMENT_IDS } from '@/shared/consts/dom-element-ids.ts';
import { Button } from '@/shared/ui/buttons';
import { Portal } from '@/shared/ui/misc';

import { useEscapeListener } from '../../lib/use-escape-listener.ts';
import { useFocusTrap } from '../../lib/use-focus-trap.ts';
import { useModalAnimation } from '../../lib/use-modal-animation.ts';
import styles from './styles.module.scss';

export const MODAL_CLOSE_DELAY_IN_MS = 100;

export interface Props {
    onClose: () => void;
    element: ReactNode;
    isVisible: boolean;
    overlayElem?: ReactNode;
    classNameContainer?: string;
    classNameContent?: string;
    classNameOverlay?: string;
    classNameTitle?: string;
    hideClose?: boolean;
    size?: 'md';
}

export const Root = (props: Props) => {
    const {
        onClose,
        element,
        isVisible,
        overlayElem,
        classNameContainer,
        classNameOverlay,
        hideClose,
        size = 'md',
        classNameContent,
    } = props;
    const portalElement = document.getElementById(DOM_ELEMENT_IDS.ROOT);
    const { isModalClosing, isModalVisible } = useModalAnimation({
        isVisible,
        animationDelay: MODAL_CLOSE_DELAY_IN_MS,
    });
    const { ref } = useFocusTrap({
        isVisible: isModalVisible,
    });
    useEscapeListener({ onEscape: onClose });

    if (!isModalVisible) {
        return null;
    }

    const contentCn = [
        styles.content,
        styles[`content-size-${size}`],
        { [styles.isClosing]: isModalClosing },
        classNameContent,
    ];

    return (
        <Portal element={portalElement || undefined}>
            <div className={clsx(styles.container, classNameContainer)}>
                <div className={cx(styles.overlay, classNameOverlay)} onClick={onClose} />
                {!hideClose && (
                    <Button variant="clear" className={styles.close} onClick={onClose}>
                        <IconClose />
                    </Button>
                )}
                {overlayElem}
                <div role="dialog" aria-modal="true" className={clsx(contentCn)} ref={ref}>
                    {element}
                </div>
            </div>
        </Portal>
    );
};
