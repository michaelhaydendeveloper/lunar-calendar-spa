import { FC } from "react";

interface FeatureContainerProps {
    containerStyle?: any;
    children: any;
}

export const FeatureContainer: FC<FeatureContainerProps> = (props) => {
    const {
        containerStyle
    } = props;
    return (
        <div
            style={containerStyle}
        >
            {props.children}
        </div>
    )
}