import { createElement, FC } from "react";
import { ContainerProps } from "../../../../components/common/types/container.types";
import { ComponentContainer } from "../../../../components/component-container/component-container.component";

interface Props {}  

export const RightContainer: FC<ContainerProps & Props> = ({}) => {

    return (
        <ComponentContainer>
            {`Top -> Right Container`}
        </ComponentContainer>
    )
}
