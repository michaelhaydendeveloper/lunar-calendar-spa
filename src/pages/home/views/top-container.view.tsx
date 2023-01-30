import { findByLabelText } from "@testing-library/react";
import { createElement, FC } from "react";
import { ContainerProps } from "../../../components/common/types/container.types";
import { ComponentContainer } from "../../../components/component-container/component-container.component";
import { LeftContainer } from "./topContainer/left-container.view";
import { RightContainer } from "./topContainer/right-container.view";

interface Props {}  

export const TopContainer: FC<ContainerProps & Props> = ({}) => {

    return (
        <ComponentContainer containerStyle={{ display: 'flex' }}>
            <LeftContainer />
            <RightContainer />
        </ComponentContainer>
    )
}
