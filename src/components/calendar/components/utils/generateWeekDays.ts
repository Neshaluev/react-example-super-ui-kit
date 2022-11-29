import {Dayjs} from 'dayjs';
import {getStartTimeOfTheDay} from './utils';

const INTERVAL = 30;

export function genearteWeekDays(currentDate: Dayjs) {
    const times = [];
    const multiplier = 1440 / INTERVAL;
    for (let i = 0; i < multiplier; i++) {
        const currentTimes = getStartTimeOfTheDay(currentDate).add(i * 30, 'minute');
        times.push(currentTimes);
    }

    return times;
}
