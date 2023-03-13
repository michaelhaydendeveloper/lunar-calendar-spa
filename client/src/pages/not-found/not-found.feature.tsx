import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { PanelComponent as Panel } from "../../components/panel";
import { HeaderComponent } from "../home/components/header.component";

export interface NotFoundProps {}

export interface NotFoundActionProps {}

export const NotFoundFeature: FC<NotFoundProps & NotFoundActionProps> = () => {
    
    return (
        <FeatureContainer classes={'not-found-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="NOT FOUND" subTitleText="OPEN YOUR MIND" />
            <Panel className="page-container">
                The Page you are looking for cannot be found. Please check your url and try again.
            </Panel>
        </FeatureContainer>
    )
}
