import clsx from 'clsx';
import React, {useState} from 'react';

import {Checked, Close} from '../icons';

import './switch.scss';

export interface ISwitchProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSwitch: (...args: any) => void;
    value: boolean;
}

export const Switch = ({onSwitch, value = false}: ISwitchProps) => {
    const [toggle, setToggle] = useState<boolean>(() => value);

    const clsxSwitch = clsx(`switch_bg`, {
        active: toggle,
    });

    const handleToggle = () => {
        setToggle(() => !toggle);
        onSwitch(toggle);
    };
    return (
        <div className={'wrapper_switch'} onClick={handleToggle}>
            <span
                style={{
                    position: 'absolute',
                    left: toggle ? '3px' : '-26px',
                    top: '3px',
                }}
            >
                <Checked />
            </span>

            <div className={clsxSwitch}>
                <div className="swicher"></div>
                <span
                    style={{
                        position: 'absolute',
                        right: toggle ? '-16px' : '4px',
                        top: '2px',
                    }}
                >
                    <Close />
                </span>
            </div>
        </div>
    );
};

Switch.displayName = 'Switch';

export default Switch;
