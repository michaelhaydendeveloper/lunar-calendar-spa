import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";

export interface SummaryProps {}

export interface SummaryActionProps {}

export const SummaryFeature: FC<SummaryProps & SummaryActionProps> = () => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Summary
            </div>
        </FeatureContainer>
    )
}
