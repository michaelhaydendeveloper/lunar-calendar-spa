import { FC } from "react";
import './styles/home.styles.scss';
import { FeatureContainer } from "../../components/feature-container";
import { GoalPanelComponet } from "./components/goal-panel/goal-panel.component";
import { HeaderComponent } from "./components/header.component";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = () => {
    
    return (
        <FeatureContainer classes={'home-feature-container'}>
            <HeaderComponent className="header-component" />
            <GoalPanelComponet />
        </FeatureContainer>
    )
}
