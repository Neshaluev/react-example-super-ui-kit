import clsx from 'clsx';
import React, {CSSProperties, PropsWithChildren, ReactNode} from 'react';
import {DOMProps} from '../interface';
import {CircleLoader} from '../loaders';

import './button.scss';

export type ButtonColor = 'base' | 'primary' | 'success' | 'error';
export type ButtonSize = 's' | 'm' | 'l' | 'xl';
export type ButtonWidth = undefined | 'auto' | 'max';

interface ButtonProps extends PropsWithChildren, DOMProps {
    size?: ButtonSize;
    width?: ButtonWidth;
    color?: ButtonColor;
    icon?: React.ReactNode;
    onlyIcon?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    rounded?: boolean;
    outline?: boolean;
    className?: string;
    full?: boolean;
    style?: CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const ButtonInner = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        children,
        isLoading,
        color = 'primary',
        icon,
        onlyIcon,
        rounded,
        className,
        outline,
        width,
        ...restProps
    },
    ref,
) {
    const renderIcon = (): ReactNode | null => {
        if (isLoading) {
            return <CircleLoader size="m" />;
        }

        if (!icon) {
            return null;
        }

        const Icon = icon;

        return <>{Icon}</>;
    };

    const renderText = () => {
        if (icon && onlyIcon) {
            return null;
        }
        if (isLoading && onlyIcon) {
            return null;
        }
        return <>{children}</>;
    };

    const classes = clsx(
        'btn',
        className,
        color,
        outline && `${color}_outline`,
        width !== undefined && `width_${width}`,
        {
            rounded: rounded,
            outline: outline,
        },
    );

    const buttonProps = {
        ...restProps,
    };

    return (
        <button className={classes} {...buttonProps} ref={ref as React.Ref<HTMLButtonElement>}>
            {renderIcon()}
            {renderText()}
        </button>
    );
});

export const Button = ButtonInner;

Button.displayName = 'Button';

export default Button;
