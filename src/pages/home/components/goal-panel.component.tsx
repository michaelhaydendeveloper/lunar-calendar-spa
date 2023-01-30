import { FC, useState } from "react";
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { PanelProps } from 'primereact/panel'

interface GoalPanelProps extends PanelProps {}

export const GoalPanelComponet: FC<GoalPanelProps> = (props) => {
    const [goal, setGoal] = useState<string | undefined>();
    const [start, setStart] = useState<string | Date | Date[] | null | undefined>();
    const [finish, setFinish] = useState<string | Date | Date[] | null | undefined>();
    return (
        <Panel {...props} header="The Goal">
            <div className="goal-form-container">
                <InputTextarea value={goal} onChange={(e) => setGoal(e.target.value)} rows={5} cols={30} />
                <Card>
                    <div className="start-finish-container">
                        <label>Start:</label>
                        <Calendar value={start} onChange={(e) => setStart(e.value)} showTime showSeconds />
                        <label>Finish:</label>
                        <Calendar value={finish} onChange={(e) => setFinish(e.value)} showTime showSeconds />
                    </div>
                </Card>
            </div>
        </Panel>
    )
}