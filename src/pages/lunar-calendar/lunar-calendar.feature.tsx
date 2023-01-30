import { FC, createElement, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { FeatureContainer } from "../../components/feature-container";
import { Moon } from "lunarphase-js";
import { TopContainer } from "./views/top-container";
import { BottomContainer } from "./views/bottom-container";

export interface LunarCalendarProps {}

export interface LunarCalendarActionProps {}

export const LunarCalendarFeature: FC<LunarCalendarProps & LunarCalendarActionProps> = ({}) => {
    
    return (
        <FeatureContainer>
            <TopContainer></TopContainer>
            <BottomContainer></BottomContainer>
        </FeatureContainer>
    )
}
