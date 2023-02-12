import { FC } from "react";
import './styles/home.styles.scss';
import { FeatureContainer } from "../../components/feature-container";
import { GoalPanelComponet } from "./components/goal-panel/goal-panel.component";
import { HeaderComponent } from "./components/header.component";
import { DrawCanvas } from "./components/draw-canvas/draw-canvas.component";
import { Purchases } from "./components/purchases/purchases.component";
import { Challenges } from "./components/challenges/challenges.component";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = () => {
    
    return (
        <FeatureContainer classes={'home-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="DAILY GOAL" subTitleText="OPEN YOUR MIND" />
            <GoalPanelComponet />
            <div className="flex flex-row draw-purchase-challenge-container">
                <DrawCanvas className="w-8 draw-canvas-form-panel" />
                <div className="flex flex-column w-4 purchases-challenges-container">
                    <Purchases />
                    <Challenges />
                </div>
            </div>
        </FeatureContainer>
    )
}
