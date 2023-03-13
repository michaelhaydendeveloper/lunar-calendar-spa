import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { PanelComponent as Panel } from "../../components/panel";
import { HeaderComponent } from "../home/components/header.component";

export interface SummaryProps {}

export interface SummaryActionProps {}

export const SummaryFeature: FC<SummaryProps & SummaryActionProps> = () => {
    
    return (
        <FeatureContainer classes={'summary-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="SUMMARY" subTitleText="OPEN YOUR MIND" />
            <Panel className="page-container">
                Summary
            </Panel>
        </FeatureContainer>
    )
}
