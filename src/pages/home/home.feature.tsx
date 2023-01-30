import { FC, createElement } from "react";
import './styles/home.styles.css';
import { FeatureContainer } from "../../components/feature-container";
import logo from '../../assets/logo.svg';
import { BottomContainer } from "./views/bottom-container.view";
import { TopContainer } from "./views/top-container.view";

export interface HomeProps {}

export interface HomeActionProps {}

export const HomeFeature: FC<HomeProps & HomeActionProps> = ({}) => {
    
    return (
        <FeatureContainer classes={'home-feature-container'}>
            <div className="header">
                <div></div>
                <div className="">
                    <h1>DAILY GOAL</h1>
                    <h5>OPEN YOUR MIND</h5>
                </div>
                <div></div>
            </div>
            <TopContainer />
            <BottomContainer />
        </FeatureContainer>
    )
}
