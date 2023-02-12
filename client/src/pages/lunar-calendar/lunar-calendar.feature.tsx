import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { TopContainer } from "./views/top-container";
import { BottomContainer } from "./views/bottom-container";
import './styles/lunar-calendar.style.scss';
import { HeaderComponent } from "../home/components/header.component";

export interface LunarCalendarProps {}

export interface LunarCalendarActionProps {}

export const LunarCalendarFeature: FC<LunarCalendarProps & LunarCalendarActionProps> = () => {
    
    return (
        <FeatureContainer classes={'lunar-calendar-feature-container feature-container'}>
            <HeaderComponent className="header-component" titleText="LUNAR CALENDAR" subTitleText="OPEN YOUR MIND" />
            <TopContainer></TopContainer>
            <BottomContainer></BottomContainer>
        </FeatureContainer>
    )
}
