import { FC } from "react";
import { ContainerProps } from "../common/types/container.types";

interface ComponentContainerProps {}

export const ComponentContainer: FC<ContainerProps & ComponentContainerProps> = (props) => {
    const {
        containerStyle,
        classes
    } = props;
    return (
        <div
            style={containerStyle}
            className={classes}
        >
            {props.children}
        </div>
    )
}