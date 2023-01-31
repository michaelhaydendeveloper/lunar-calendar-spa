import { FC, useEffect, useState } from "react";
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { PanelProps } from 'primereact/panel'

interface GoalPanelProps extends PanelProps {}

export const GoalPanelComponet: FC<GoalPanelProps> = (props) => {
    const [goal, setGoal] = useState<string | undefined>();
    const [start, setStart] = useState<string>();
    const [finish, setFinish] = useState<string | Date | Date[] | null | undefined>();
    const [minFinishDate, setMinFinishDate] = useState<Date>();

    useEffect(() => {
        if(start) {
            setMinFinishDate(new Date(start));
            if(finish && new Date(start) > finish) {
                setFinish(undefined);
            }
        }
    }, [start]);

    const goalFormPanelHeaderTemplate = () => {
        return (
            <div className="p-panel-header">
                <div 
                    className="p-panel-title"
                >
                    The Goal
                </div>
                <div></div>
                <div 
                    className="p-panel-icons"
                >
                </div>
            </div>
        )
    }
    
    return (
        <Panel {...props} headerTemplate={goalFormPanelHeaderTemplate}  header="The Goal" className="goal-form-panel">
            <div className="goal-form-container">
                <InputTextarea value={goal} onChange={(e) => setGoal(e.target.value)} rows={5} cols={30} autoResize />
                <Card className="start-finish-card">
                    <div className="start-finish-container">
                        <label>Start:</label>
                        <Calendar value={start} onChange={(e) => {
                            if(e?.value)
                                setStart(e.value.toString());
                        }} showTime showSeconds />
                        <label>Finish:</label>
                        <Calendar minDate={minFinishDate} value={finish} onChange={(e) => setFinish(e.value)} showTime showSeconds />
                    </div>
                </Card>
            </div>
        </Panel>
    )
}