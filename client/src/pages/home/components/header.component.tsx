import { Card, CardProps } from "primereact/card";
import { FC } from "react";

interface HeaderComponentProps extends CardProps { 
    titleText?: string;
    subTitleText?: string;
}

export const HeaderComponent: FC<HeaderComponentProps> = (props) => {
    const {
        titleText,
        subTitleText,
    } = props;

    return (
        <Card {...props}>
            <div className="header">
                <div></div>
                <div>
                    <h1>{titleText}</h1>
                    <h5>{subTitleText}</h5>
                </div>
                <div></div>
            </div>
        </Card>
    )
}