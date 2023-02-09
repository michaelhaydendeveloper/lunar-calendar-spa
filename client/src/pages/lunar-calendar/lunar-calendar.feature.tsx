import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { TopContainer } from "./views/top-container";
import { BottomContainer } from "./views/bottom-container";
import './styles/lunar-calendar.style.scss';

export interface LunarCalendarProps {}

export interface LunarCalendarActionProps {}

export const LunarCalendarFeature: FC<LunarCalendarProps & LunarCalendarActionProps> = () => {
    
    return (
        <FeatureContainer>
            <TopContainer></TopContainer>
            <BottomContainer></BottomContainer>
        </FeatureContainer>
    )
}
