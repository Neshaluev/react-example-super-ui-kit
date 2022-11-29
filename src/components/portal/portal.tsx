import React from 'react';
import ReactDOM from 'react-dom';
import {getPortalContainer} from '../utils/getPortalContainer';

export interface PortalProps {
    container?: HTMLElement;
    children?: React.ReactNode;
}

export function Portal({container, children}: PortalProps) {
    const defaultContainer = getPortalContainer();
    return ReactDOM.createPortal(children, container ?? defaultContainer);
}
