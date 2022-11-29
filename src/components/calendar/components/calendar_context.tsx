import {Dayjs} from 'dayjs';
import * as React from 'react';
import {useCalendar} from './hooks/useCalendar';

export interface ICalendarContext {
    currentDate: Dayjs;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setNextMonth: (...args: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setCurrentDate: (...args: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPrevMonth: (...args: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleAddMonthControl: (...args: any) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectedDay: (...args: any) => void;
}

export const CalendarContext = React.createContext<ICalendarContext>({} as ICalendarContext);

export function CalendarProvider<T>({children}: React.PropsWithChildren<T>) {
    const {
        currentDate,
        handleSelectedDay,
        setCurrentDate,
        setNextMonth,
        setPrevMonth,
        handleAddMonthControl,
    } = useCalendar();

    const data = React.useMemo(
        () => ({
            currentDate,
            setCurrentDate,
            setNextMonth,
            setPrevMonth,
            handleAddMonthControl,
            handleSelectedDay,
        }),
        [currentDate],
    );

    return <CalendarContext.Provider value={data}>{children}</CalendarContext.Provider>;
}
