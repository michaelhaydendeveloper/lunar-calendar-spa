import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { PanelComponent as Panel } from "../../components/panel";
import { HeaderComponent } from "../home/components/header.component";

export interface ContactUsProps {}

export interface ContactUsActionProps {}

export const ContactUsFeature: FC<ContactUsProps & ContactUsActionProps> = () => {
    
    return (
        <FeatureContainer classes={'not-found-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="CONTACT US" subTitleText="OPEN YOUR MIND" />
            <Panel className="page-container">
                Contact Us
            </Panel>
        </FeatureContainer>
    )
}
