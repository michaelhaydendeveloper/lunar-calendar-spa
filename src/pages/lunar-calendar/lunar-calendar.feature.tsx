import { FC, createElement, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { FeatureContainer } from "../../components/feature-container";
import { Moon } from "lunarphase-js";

export interface LunarCalendarProps {}

export interface LunarCalendarActionProps {}

export const LunarCalendarFeature: FC<LunarCalendarProps & LunarCalendarActionProps> = ({}) => {
    const [dateNow, ] = useState(new Date());
    const [liveDate, setLiveDate] = useState<Date>(new Date());
    const [lunarAgePercentage, setLunarAgePercentage] = useState<String>((Moon.lunarAgePercent() * 100).toFixed(2));

    const localizer = momentLocalizer(moment);

    /**
     * Update time per second.
     * 
     * @returns {Function} clearInterval - eliminates bleeding when navigation between pages
     */
    useEffect(() => {
        console.log('useEffect');
        const setIntervalHandler = setInterval(() => setLiveDate(new Date()), 500);
        const setLunarAgeIntervalHandler = setInterval(() => setLunarAgePercentage((Moon.lunarAgePercent() * 100 ).toFixed(2)), 5000);

        return () => {
            clearInterval(setIntervalHandler);
            clearInterval(setLunarAgeIntervalHandler);
        }
    }, [])
    console.log('lunar-calendar.feature');
    return (
        <FeatureContainer>
            <div className="page-container">
                <h1 data-testid="lc-h1-header">Lunar Calendar</h1>
                <div data-testid="lc-lunar-phase">{Moon.lunarPhase()}</div>
                <div data-testid="lc-lunar-phase-emoji" className="lunar-phase-emoji">{Moon.lunarPhaseEmoji(dateNow)}</div>
                <div data-testid="lc-local-date-string">
                    {
                        liveDate.toLocaleDateString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                            second: "2-digit",
                        })
                    }
                </div>
                <div>
                    Lunar Phase: {Moon.lunarPhase()}
                </div>
                <div>
                    Lunar Age: {`${Moon.lunarAge().toFixed(2)} Days`}
                </div>
                <div>
                    Lunar Age Percent: {`${lunarAgePercentage}%`}
                </div>
                {/* <Calendar  showTime inline /> */}
                <Calendar
                    localizer={localizer}
                    style={{ height: 500 }} 
                    views={['month']}
                />
            </div>
        </FeatureContainer>
    )
}
