

import { FC, useEffect, useState } from "react";
import { Moon } from "lunarphase-js";
import { Calendar, CalendarDateTemplateEvent } from "../../../../components/calendar";
import './lunar-calendar.style.scss';

interface LunarCalendarProps {}

export const LunarCalendar: FC<LunarCalendarProps> = (props) => {

    const dateTemplate = (date: CalendarDateTemplateEvent) => {
        const lunarDate = new Date(`${date.month + 1}/${date.day}/${date.year} 00:00:01`);
        const lunarPercentage = parseInt((Moon.lunarAgePercent(lunarDate) * 100).toFixed(0));
        const day = lunarPercentage >= 0 && lunarPercentage <= 4 ? 'day1-right' : '';
        return (
            <div className={`date-template ${day}`} style={{display: 'flex', minHeight: '40px', minWidth: '40px'}}>    
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <div style={{fontSize: '2rem'}}>
                        {lunarDate.getDate()}
                    </div>
                    {
                        Moon.lunarPhase(lunarDate) === 'New' && (lunarPercentage >= 0 && lunarPercentage <= 4) ?
                            <span style={{fontSize: '5px'}}>Sabbath</span>
                        :
                            <>
                                {lunarPercentage}
                            </>
                    }
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
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
        <Calendar className="lunar-calendar" dateTemplate={dateTemplate} />
    )
};
