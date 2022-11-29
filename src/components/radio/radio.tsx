import React from 'react';
import {ControlProps, DOMProps} from '../interface';
import {useRadio} from '../hooks/useRadio';
import clsx from 'clsx';
import './radio.scss';

// const b = block('radio');

export type RadioSize = 's' | 'm' | 'l';
export type RadioType = 'outline' | 'box-shadow ';

export interface RadioProps extends DOMProps, ControlProps {
    size?: RadioSize;
    content?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    type?: RadioType;
}

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(function Radio(props, ref) {
    const {type = 'outline', content, children, title, style, size} = props;
    const {inputProps} = useRadio(props);
    const text = content || children;

    const clsxRadio = clsx('radio', size, type);

    return (
        <>
            {/* <label
                ref={ref}
                title={title}
                style={style}
                className={clsx(
                    'radio',
                    {
                        radio__size: size,
                        disabled,
                        checked,
                    },
                    className,
                )}
                // data-qa={qa}
            >
                <span className={clsx('radio', 'readio__indicator')}>
                    <span className={clsx('radio', 'readio__disc')} />
                    <input
                        {...inputProps}
                        className={clsx('radio', 'readio__icontrol')}
                        type="radio"
                    />
                    <span className={clsx('radio', 'readio__ioutline')} />
                </span>
                {text && <span className={clsx('radio', 'readio__itext')}>{text}</span>}
            </label>
*/}

            <label ref={ref} title={title} style={style}>
                <input
                    {...inputProps}
                    type="radio"
                    name="styles-100"
                    // className="radio radio_box_shadow"
                    className={clsxRadio}
                />
                <span>{text}</span>
            </label>
        </>
    );
});
