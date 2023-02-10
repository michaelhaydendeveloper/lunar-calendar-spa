import { FC } from "react";
import { ComponentContainer } from "../../../components/component-container/component-container.component";
import { LeftContainer } from "./topContainer/left-container";
import { RightContainer } from "./topContainer/right-container";

interface Props {}  

export const TopContainer: FC<Props> = () => {

    return (
        <ComponentContainer containerStyle={{ display: 'flex' }}>
            <LeftContainer />
            <RightContainer />
        </ComponentContainer>
    )
}
