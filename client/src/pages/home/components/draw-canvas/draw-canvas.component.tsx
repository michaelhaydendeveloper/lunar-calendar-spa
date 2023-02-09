import { Panel, PanelProps } from "primereact/panel";
import { FC } from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { goalFormPanelHeaderTemplate } from "../common/templates";
import './draw-canvas.style.scss';


interface DrawCanvasProps extends PanelProps {}

export const DrawCanvas: FC<DrawCanvasProps> = (props) => {

    const headerTemplate = () => {
        return goalFormPanelHeaderTemplate('Ideas/ Sketches');
    }

    return (
        <Panel {...props}  headerTemplate={headerTemplate} >
            <ReactSketchCanvas style={{border: 'none', height: '358px'}} />
        </Panel>
    )
}