import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { HeaderComponent } from "../home/components/header.component";

export interface SummaryProps {}

export interface SummaryActionProps {}

export const SummaryFeature: FC<SummaryProps & SummaryActionProps> = () => {
    
    return (
        <FeatureContainer classes={'summary-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="SUMMARY" subTitleText="OPEN YOUR MIND" />
            <div className="page-container">
                Summary
            </div>
        </FeatureContainer>
    )
}
