import { Card, CardProps } from "primereact/card";
import { FC } from "react";

interface HeaderComponentProps extends CardProps { }

export const HeaderComponent: FC<HeaderComponentProps> = (props) => {

    return (
        <Card {...props}>
            <div className="header">
                <div></div>
                <div>
                    <h1>DAILY GOAL</h1>
                    <h5>OPEN YOUR MIND</h5>
                </div>
                <div></div>
            </div>
        </Card>
    )
}