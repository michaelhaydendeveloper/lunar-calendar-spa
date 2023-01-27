import { FC, createElement } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

export interface NotFoundProps {}

export interface NotFoundActionProps {}

export const NotFoundFeature: FC<NotFoundProps & NotFoundActionProps> = ({}) => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Not Found
            </div>
        </FeatureContainer>
    )
}
