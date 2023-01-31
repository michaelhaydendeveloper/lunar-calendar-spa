import { FC, useEffect, useState } from "react";
import { Card, CardProps } from "primereact/card";
import { Moon } from "lunarphase-js";

interface LunarDailyCardProps extends CardProps {}

export const LunarDailyCard: FC<LunarDailyCardProps> = (props) => {
    const [dateNow, ] = useState(new Date());
    const [liveDate, setLiveDate] = useState<Date>(new Date());
    const [lunarAgePercentage, setLunarAgePercentage] = useState<String>((Moon.lunarAgePercent() * 100).toFixed(2));

    /**
     * Update time per second.
     * 
     * @returns {Function} clearInterval - eliminates bleeding when navigation between pages
     */
    useEffect(() => {
        const setIntervalHandler = setInterval(() => setLiveDate(new Date()), 500);
        const setLunarAgeIntervalHandler = setInterval(() => setLunarAgePercentage((Moon.lunarAgePercent() * 100 ).toFixed(2)), 5000);

        return () => {
            clearInterval(setIntervalHandler);
            clearInterval(setLunarAgeIntervalHandler);
        }
    }, [])
    
    return (
        <Card {...props}>
            <div className="lunar-daily-card-container page-container">
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
            </div>
        </Card>
    )
}