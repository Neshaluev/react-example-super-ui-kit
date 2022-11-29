import clsx from 'clsx';
import {Dayjs} from 'dayjs';
import React, {LegacyRef, useContext, useMemo, useState} from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import {CalendarContext} from '../calendar_context';
import {genearteWeekDays} from '../utils/generateWeekDays';

import './calendar_times_list.scss';

export function CalendarTimesList() {
    const {currentDate, handleSelectedDay} = useContext(CalendarContext);

    const generateTimes = useMemo(() => {
        return genearteWeekDays(currentDate);
    }, [currentDate]);

    function getCurrentDayClass(day: Dayjs) {
        return day.format('HH:mm') === currentDate.format('HH:mm');
    }

    const [isFocusTimes, setIsFocusTimes] = useState(false);

    const refTimes = useOutsideClick(() => setIsFocusTimes(false));

    const clsTimesList = clsx('times_list', {
        focused: isFocusTimes,
    });

    return (
        <div className="calendar_times_list">
            <ul
                className={clsTimesList}
                ref={refTimes as LegacyRef<HTMLUListElement>}
                onClick={() => setIsFocusTimes(true)}
            >
                {generateTimes.map((t, idx) => {
                    const clsTime = clsx('time', {
                        active: getCurrentDayClass(t),
                    });

                    return (
                        <li
                            key={`${t}-${idx}`}
                            className="times_list_item"
                            onClick={() => handleSelectedDay(t)}
                        >
                            <span className={clsTime}>{t.format('HH:mm')}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CalendarTimesList;
