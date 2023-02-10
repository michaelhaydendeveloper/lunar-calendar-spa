import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";

export interface ContactUsProps {}

export interface ContactUsActionProps {}

export const ContactUsFeature: FC<ContactUsProps & ContactUsActionProps> = () => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Contact Us
            </div>
        </FeatureContainer>
    )
}
