import clsx from 'clsx';
import React, {useContext} from 'react';
import {CalendarContext} from '../calendar_context';
import {daysOfTheWeek, fullMonthName} from '../utils/utils';

import {ArrowLeft, ArrowRight} from '../../../icons';

import './calendar_navigate.scss';

const CalendarNavigate = () => {
    const {currentDate, handleAddMonthControl, setNextMonth, setPrevMonth} =
        useContext(CalendarContext);

    const [isVisibleMonth, setIsVisibleMonth] = React.useState(false);

    return (
        <>
            {isVisibleMonth && (
                <div className="calendar_month_dropdown" onClick={() => setIsVisibleMonth(false)}>
                    {fullMonthName.map((name, idx) => {
                        const clsText = clsx(`calendar_month_dropdown_item_text`, {
                            active: currentDate.format('MMMM') === name,
                        });
                        return (
                            <div
                                key={`${name}-${idx}`}
                                className="calendar_month_dropdown_item"
                                onClick={() => handleAddMonthControl(idx)}
                            >
                                <span className={clsText}>{name}</span>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="calendar_nav">
                <div className="calendar_nav_list">
                    <div className="nav_controller_left">
                        <button onClick={() => setNextMonth()}>
                            <ArrowLeft />
                        </button>
                    </div>
                    <div className="nav_controller_selected_date">
                        <span className="selected-month" onClick={() => setIsVisibleMonth(true)}>
                            {currentDate.clone().format('MMMM')}
                        </span>
                        <span className="selected-yearh">{currentDate.clone().format('YYYY')}</span>
                    </div>
                    <div className="nav_controller_right">
                        <button onClick={() => setPrevMonth()}>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="calendar_weekdays">
                    {daysOfTheWeek.map((name, idx) => (
                        <div key={`${name}-${idx}`}>{name}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CalendarNavigate;
