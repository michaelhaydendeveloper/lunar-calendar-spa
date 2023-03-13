import { FC } from "react";
import { Panel, PanelProps as prPanelProps } from "primereact/panel";

export interface PanelProps extends prPanelProps {}

export const PanelComponent: FC<PanelProps> = (props) => {
    return (
        <Panel {...props}>
            {props.children}
        </Panel>
    )
}
