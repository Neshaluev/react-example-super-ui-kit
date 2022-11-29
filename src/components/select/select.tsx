import clsx from 'clsx';
import React, {FC, OptionHTMLAttributes, SelectHTMLAttributes} from 'react';

// import {ArrowDown} from '../icons';

import './select.scss';

interface SelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
    text: string;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name?: string;
    id?: string;
    selectDefaultValue?: string;
    disabled?: boolean;
    className?: string;
    options?: SelectOption[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectOption: (...args: any) => void;
}

export const Select: FC<SelectProps> = (props) => {
    const {
        name,
        id,
        selectDefaultValue,
        value,
        disabled = false,
        className,
        options = [],
        handleSelectOption,
        ...rest
    } = props;

    const ref = React.useRef(null);

    const classes = clsx('select', className);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelect = (e: any) => {
        handleSelectOption(e.target.value);
    };

    return (
        <div className="wrapper-select">
            <select
                onChange={handleSelect}
                id={id}
                name={name}
                className={classes}
                ref={ref}
                defaultValue={selectDefaultValue}
                value={value}
                disabled={disabled}
                {...rest}
            >
                {options.map((option, index) => {
                    const {text, ...rest} = option;
                    return (
                        <option {...rest} key={index}>
                            {text}
                        </option>
                    );
                })}
            </select>
            {/* <div className="select-arrow">
                <ArrowDown />
            </div> */}
        </div>
    );
};

export default Select;
