

import { FC, useEffect, useState } from "react";
import { Moon } from "lunarphase-js";
import { Calendar, CalendarDateTemplateEvent } from "../../../../components/calendar";
import './lunar-calendar.style.scss';

interface LunarCalendarProps {}

export const LunarCalendar: FC<LunarCalendarProps> = (props) => {

    const dateTemplate = (date: CalendarDateTemplateEvent) => {
        const lunarDate = new Date(`${date.month + 1}/${date.day}/${date.year} 00:00:01`);
        const lunarPercentage = parseInt((Moon.lunarAgePercent(lunarDate) * 100).toFixed(0));
        const day = lunarPercentage >= 0 && lunarPercentage <= 3 ? 'day1-right' : '';
        return (
            <div className={`date-template ${day}`}>    
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <div style={{fontSize: '2rem'}}>
                        {lunarDate.getDate()}
                    </div>
                    {
                        Moon.lunarPhase(lunarDate) === 'New' && (lunarPercentage >= 0 && lunarPercentage <= 3) ?
                            <div style={{fontSize: '5px', textAlign: 'right'}}>Sabbath</div>
                        :
                            <>
                                
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

    // const dateTemplate = (date: CalendarDateTemplateEvent) => {
    //     const lunarDate = new Date(`${date.month + 1}/${date.day}/${date.year} 00:00:01`);
    //     const lunarPercentage = parseInt((Moon.lunarAgePercent(lunarDate) * 100).toFixed(0));
    //     const day = lunarPercentage >= 0 && lunarPercentage <= 3 ? 'day1-right' : '';
    //     return (
    //         <div className={`date-template ${day}`}>    
    //             <div>
    //                 <div>
    //                     {lunarDate.getDate()}
    //                 </div>
    //                 {
    //                     Moon.lunarPhase(lunarDate) === 'New' && (lunarPercentage >= 0 && lunarPercentage <= 3) ?
    //                         <div>Sabbath</div>
    //                     :
    //                         <>
                                
    //                         </>
    //                 }
    //             </div>
    //             <div>
    //                 <div>
    //                     {Moon.lunarPhaseEmoji(lunarDate)}
    //                 </div>        
    //                 <div>
    //                     {lunarPercentage}%
    //                 </div>
    //             </div>
    //         </div>

    //     )
    // }

    return (
        <Calendar className="lunar-calendar" dateTemplate={dateTemplate} />
    )
};
