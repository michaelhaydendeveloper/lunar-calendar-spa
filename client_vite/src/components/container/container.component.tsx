import { FC } from "react";
import { ContainerProps } from "../common/types/container.types";



export const ComponentContainer: FC<ContainerProps> = (props) => {
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