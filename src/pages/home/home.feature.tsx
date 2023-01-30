import { FC } from "react";
import { Panel } from 'primereact/panel';
import './styles/home.styles.css';
import { FeatureContainer } from "../../components/feature-container";
import { BottomContainer } from "./views/bottom-container.view";
import { TopContainer } from "./views/top-container.view";
import { GoalPanelComponet } from "./components/goal-panel.component";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = () => {
    
    return (
        <FeatureContainer classes={'home-feature-container'}>
            <div className="header">
                <div></div>
                <div>
                    <h1>DAILY GOAL</h1>
                    <h5>OPEN YOUR MIND</h5>
                </div>
                <div></div>
            </div>
            <GoalPanelComponet />
            {/* <TopContainer />
            <BottomContainer /> */}
        </FeatureContainer>
    )
}
