import { FC, useEffect, useState } from "react";
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { PanelProps } from 'primereact/panel'
import './goal-panel.style.scss';
import { goalFormPanelHeaderTemplate } from "../common/templates";

interface GoalPanelProps extends PanelProps {}

export const GoalPanelComponet: FC<GoalPanelProps> = (props) => {
    const [goal, setGoal] = useState<string | undefined>();
    const [start, setStart] = useState<string>();
    const [finish, setFinish] = useState<string>();
    const [minFinishDate, setMinFinishDate] = useState<Date>();

    /**
     * Finish date cannot be greater than start date
     */
    useEffect(() => {
        if(start) {
            setMinFinishDate(new Date(start));
            if(finish && new Date(start) >= new Date(finish)) {
                setFinish(undefined);
            }
        } 
    }, [start]); // eslint-disable-line

    const headerTemplate = () => {
        return goalFormPanelHeaderTemplate('The Goal');
    }

    const goalTextareaChangeHandler = (e: any) => {
        setGoal(e?.target?.value);
    }

    const goalStartDateChangeHandler = (e: any) => {
        setStart(e?.value);
    }

    const goalFinishDateChangeHandler = (e: any) => {
        setFinish(e?.value);
    }
    
    return (
        <Panel {...props} data-testid="goal-panel-component" headerTemplate={headerTemplate}  header="The Goal" className="goal-form-panel">
            <div className="goal-form-container">
                <InputTextarea data-testid="goal-panel-textarea" aria-labelledby="goal-textarea" value={goal} onChange={goalTextareaChangeHandler} rows={5} cols={30}  />
                <Card className="start-finish-card">
                    <div className="start-finish-container">
                        <label id="goal-start-date-label">Start:</label>
                        <Calendar className="start-date-calendar" data-testid="goal-panel-start-date-calendar" ariaLabelledBy="goal-start-date-label" hideOnDateTimeSelect value={start} onChange={goalStartDateChangeHandler} showTime showSeconds tabIndex={0} />
                        <label id="goal-finish-date-label">Finish:</label>
                        <Calendar className="finish-date-calendar" data-testid="goal-panel-finish-date-calendar" ariaLabelledBy="goal-finish-date-label" hideOnDateTimeSelect minDate={minFinishDate} value={finish} onChange={goalFinishDateChangeHandler} showTime showSeconds tabIndex={1} />
                    </div>
                </Card>
            </div>
        </Panel>
    )
}