import { FC } from "react";
import { Panel } from 'primereact/panel';
import './styles/home.styles.css';
import { FeatureContainer } from "../../components/feature-container";
import { BottomContainer } from "./views/bottom-container.view";
import { TopContainer } from "./views/top-container.view";
import { GoalPanelComponet } from "./components/goal-panel.component";
import { HeaderComponent } from "./components/header.component";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = () => {
    
    return (
        <FeatureContainer classes={'home-feature-container'}>
            <HeaderComponent className="header-component" />
            <GoalPanelComponet />
            {/* <TopContainer />
            <BottomContainer /> */}
        </FeatureContainer>
    )
}
