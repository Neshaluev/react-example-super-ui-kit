import React from 'react';

import {ControlProps} from '../interface';
// import {useForkRef} from './useForkRef';

export function useRadio({
    name,
    value,
    checked,
    defaultChecked,
    disabled,
    // controlRef,
    controlProps,
    onUpdate,
    onChange,
    onFocus,
    onBlur,
}: // id,
ControlProps) {
    const controlId = String(Math.random());
    // const innerControlRef = React.useRef<HTMLInputElement>(null);
    const [checkedState, setCheckedState] = React.useState(defaultChecked ?? false);
    const isControlled = typeof checked === 'boolean';
    const isChecked = isControlled ? checked : checkedState;

    // const handleRef = useForkRef(controlRef, innerControlRef);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setCheckedState(event.target.checked);
        }

        if (onChange) {
            onChange(event);
        }

        if (onUpdate) {
            onUpdate(event.target.checked);
        }
    };

    const handleClick = React.useCallback(
        (event: React.MouseEvent<HTMLInputElement>) => {
            controlProps?.onClick?.(event);
        },
        [controlProps?.onClick],
    );

    const inputProps: React.InputHTMLAttributes<HTMLInputElement> &
        React.RefAttributes<HTMLInputElement> = {
        ...controlProps,
        name: name || controlId,
        value,
        // id,
        onFocus,
        onBlur,
        disabled,
        type: 'radio',
        onChange: handleChange,
        onClick: handleClick,
        checked,
        defaultChecked: defaultChecked,
        'aria-checked': isChecked,
        // ref: handleRef,
    };

    return {checked: isChecked, inputProps};
}
