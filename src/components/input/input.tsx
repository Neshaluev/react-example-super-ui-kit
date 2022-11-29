import React, {ChangeEvent, forwardRef} from 'react';

import {Danger} from '../../components/icons';

import './input.scss';
import clsx from 'clsx';

export type TypeStyleButton = 'base' | 'primary' | 'success' | 'error';

interface InputProps {
    value?: string;
    prefix?: string;
    suffix?: string;
    color?: TypeStyleButton;
    error?: string;
    activeSuccess?: boolean;
    classNames?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {prefix, error, suffix, activeSuccess = false, color = 'base', onChange, ...restProps},
        ref,
    ) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (onChange) {
                onChange(e);
            }
        };

        const renderError = () => {
            if (!error) {
                return null;
            }
            return <div className="input-error">{error}</div>;
        };

        const renderPrefix = () => {
            if (!prefix) {
                return null;
            }
            return <div className="prefix-input">{prefix}</div>;
        };

        const renderSuffix = () => {
            if (!suffix && !error) {
                return null;
            }

            return (
                <div className="suffix-input">
                    {suffix}
                    {error && <Danger />}
                </div>
            );
        };

        const renderInput = () => {
            const clsInput = clsx(color, {
                success: activeSuccess,
                error: error,
            });

            const clsInputContent = clsx('input_content', {
                // rounded: !prefix && !suffix,
            });

            return (
                <div className={'input_container'}>
                    {renderPrefix()}
                    <div className={clsInputContent}>
                        <input
                            {...restProps}
                            onChange={handleChange}
                            ref={ref}
                            className={clsInput}
                        />
                    </div>
                    {renderSuffix()}
                </div>
            );
        };

        return (
            <div className="wrapper_input">
                {renderInput()}
                {renderError()}
            </div>
        );
    },
);

Input.displayName = 'Input';

export default Input;
