import { FC, createElement } from "react";
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';
import { BottomContainer } from "./views/bottom-container.view";
import { TopContainer } from "./views/top-container.view";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = ({}) => {
    
    return (
        <FeatureContainer>
            <TopContainer />
            <BottomContainer />
        </FeatureContainer>
    )
}
