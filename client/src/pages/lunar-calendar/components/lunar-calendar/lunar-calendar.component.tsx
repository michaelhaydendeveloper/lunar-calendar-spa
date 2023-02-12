

import { FC, useEffect, useState } from "react";
import { Moon } from "lunarphase-js";
import { Calendar, CalendarDateTemplateEvent } from "../../../../components/calendar";
import './lunar-calendar-component.style.scss';

interface LunarCalendarProps {}

export const LunarCalendar: FC<LunarCalendarProps> = (props) => {

    const dateTemplate = (date: CalendarDateTemplateEvent) => {
        const lunarDate = new Date(`${date.month + 1}/${date.day}/${date.year} 00:00:01`);
        const lunarPercentage = parseInt((Moon.lunarAgePercent(lunarDate) * 100).toFixed(0));
        let day = lunarPercentage >= 0 && lunarPercentage <= 3 ? 'day1-left' : '';
        // day = day ? day : lunarPercentage >= 97 && lunarPercentage <= 100 ? 'day1-right': '';
        return (
            <div className={`date-template ${day}`}>    
                <div className="lunar-date-phase">
                    <div className="lunar-date">
                        {lunarDate.getDate()}
                    </div>
                    {
                        Moon.lunarPhase(lunarDate) === 'New' && (lunarPercentage >= 0 && lunarPercentage <= 3) ?
                            <div className="lunar-phase">Sabbath</div>
                        :
                        <div className="lunar-phase"></div>
                    }
                </div>
                <div className="lunar-emoji-percent">
                    <div className="lunar-emoji">
                        {Moon.lunarPhaseEmoji(lunarDate)}
                    </div>        
                    <div>
                        {lunarPercentage}%
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Calendar className="lunar-calendar" dateTemplate={dateTemplate} inline />
    )
};
