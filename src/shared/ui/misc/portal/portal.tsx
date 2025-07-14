import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: ReactNode;
    element?: HTMLElement;
}

export function Portal(props: Props) {
    const { element = document.body, children } = props;

    return createPortal(children, element);
}
