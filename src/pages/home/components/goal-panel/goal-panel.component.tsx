import { FC, useEffect, useState } from "react";
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { PanelProps } from 'primereact/panel'
import './goal-panel.style.scss';

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
            if(finish && new Date(start) > new Date(finish)) {
                setFinish(undefined);
            }
        } 
    }, [start]); // eslint-disable-line

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

    const goalTextareaChangeHandler = (e: any) => {
        setGoal(e?.target?.value);
    }

    const goalStartDateChangeHandler = (e: any) => {
        setStart(e?.value?.toString());
    }

    const goalFinishDateChangeHandler = (e: any) => {
        setFinish(e?.value?.toString());
    }
    
    return (
        <Panel {...props} data-testid="goal-panel-component" headerTemplate={goalFormPanelHeaderTemplate}  header="The Goal" className="goal-form-panel">
            <div className="goal-form-container">
                <InputTextarea data-testid="goal-panel-textarea" aria-labelledby="goal-textarea" value={goal} onChange={goalTextareaChangeHandler} rows={5} cols={30} autoResize />
                <Card className="start-finish-card">
                    <div className="start-finish-container">
                        <label>Start:</label>
                        <Calendar data-testid="goal-panel-start-date-calendar" ariaLabelledBy="goal-start-date" value={start} onChange={goalStartDateChangeHandler} showTime showSeconds />
                        <label>Finish:</label>
                        <Calendar data-testid="goal-panel-finish-date-calendar" ariaLabelledBy="goal-finish-date" minDate={minFinishDate} value={finish} onChange={goalFinishDateChangeHandler} showTime showSeconds />
                    </div>
                </Card>
            </div>
        </Panel>
    )
}