import clsx from 'clsx';
import React from 'react';
import {DOMProps} from '../../interface';

import './circle_loader.scss';

export type CircleLoaderSize = 's' | 'm' | 'l' | 'x';

export interface CircleLoaderProps extends DOMProps {
    size?: CircleLoaderSize;
    white?: boolean;
}

export const CircleLoader = ({size, white}: CircleLoaderProps) => {
    const classes = clsx('my-loader-button', `size_${size}`, {
        white: white,
    });

    return <div className={classes}></div>;
};

export default CircleLoader;
