import { FC } from "react";
import { ContainerProps } from "../common/types/container.types";

interface FeatureContainerProps {}

export const FeatureContainer: FC<ContainerProps & FeatureContainerProps> = (props) => {
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