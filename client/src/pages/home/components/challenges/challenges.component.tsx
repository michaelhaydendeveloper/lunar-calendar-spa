import { InputTextarea } from "primereact/inputtextarea";
import { Panel, PanelProps } from "primereact/panel";
import { FC, useState } from "react";
import { goalFormPanelHeaderTemplate } from "../common/templates";
import './challenges.style.scss';


interface ChallengesProps extends PanelProps {}

export const Challenges: FC<ChallengesProps> = (props) => {
    const [challenges, setChallenges] = useState<string>();
    const headerTemplate = () => {
        return goalFormPanelHeaderTemplate('Challenges');
    }

    const challengesTextareaChangeHandler = (e: any) => {
        setChallenges(e?.target?.value);
    }

    return (
        <Panel {...props}  headerTemplate={headerTemplate} className="challenges-form-panel" >
            <div className="challenges-form-container">
                <InputTextarea data-testid="challenges-panel-textarea" aria-labelledby="challenges-textarea" value={challenges} onChange={challengesTextareaChangeHandler} rows={5} cols={30}  />
            </div>
        </Panel>
    )
}