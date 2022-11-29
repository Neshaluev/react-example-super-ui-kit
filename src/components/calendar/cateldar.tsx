import React, {useContext, useEffect} from 'react';

import CalendarInput from './components/calendar_input/calendar_input';
import CalendarTimesList from './components/calendar_times_list/calendar_times_list';
import {CalendarContext, CalendarProvider} from './components/calendar_context';
import CalendarNavigate from './components/calendar_navigate/calendar_navigate';
import CalendarContent from './components/calendar_content/calendar_content';

import './calendar.scss';

export interface ICalendar {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    executeFn?: (...args: any) => void;
}

export function InnerCalendar({executeFn}: ICalendar) {
    const {currentDate} = useContext(CalendarContext);

    useEffect(() => {
        if (executeFn) {
            executeFn(currentDate);
        }
    }, [currentDate]);

    return (
        <div className="wrapper-calendar">
            <div className="calendar">
                <div className="calendar_content">
                    <CalendarNavigate />
                    <CalendarContent />
                </div>
                <CalendarTimesList />
            </div>
            <CalendarInput />
        </div>
    );
}

export const Calendar = ({...props}: ICalendar) => {
    return (
        <CalendarProvider>
            <InnerCalendar {...props} />
        </CalendarProvider>
    );
};

Calendar.dispayName = 'Calendar';

export default Calendar;
