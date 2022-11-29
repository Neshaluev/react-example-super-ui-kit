import dayjs, {Dayjs} from 'dayjs';
import React from 'react';
import {ICalendarContext} from '../calendar_context';

export type HookCalendar = ICalendarContext;

export function useCalendar(): HookCalendar {
    const [currentDate, setCurrentDate] = React.useState<Dayjs>(() => dayjs());

    const setNextMonth = () => {
        setCurrentDate((currDate: Dayjs) => currDate.subtract(1, 'month'));
    };

    const setPrevMonth = () => {
        setCurrentDate((currDate: Dayjs) => currDate.add(1, 'month'));
    };

    const handleAddMonthControl = (idx: number) => {
        setCurrentDate((currDate: Dayjs) => currDate.set('month', idx));
    };

    const handleSelectedDay = (day: Dayjs) => {
        setCurrentDate(() => day);
    };

    return {
        currentDate,
        setCurrentDate,
        handleSelectedDay,
        setNextMonth,
        setPrevMonth,
        handleAddMonthControl,
    };
}
