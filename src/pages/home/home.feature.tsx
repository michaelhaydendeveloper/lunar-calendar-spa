import { FC, createElement } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = ({}) => {
    
    return (
        <FeatureContainer>
            <div className="page-container">
                Home
            </div>
        </FeatureContainer>
    )
}
