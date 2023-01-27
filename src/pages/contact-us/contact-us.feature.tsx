import { FC, createElement } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';

export interface ContactUsProps {}

export interface ContactUsActionProps {}

export const ContactUsFeature: FC<ContactUsProps & ContactUsActionProps> = ({}) => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Contact Us
            </div>
        </FeatureContainer>
    )
}
