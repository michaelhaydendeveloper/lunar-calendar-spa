import { InputTextarea } from "primereact/inputtextarea";
import { Panel, PanelProps } from "primereact/panel";
import { FC, useState } from "react";
import { goalFormPanelHeaderTemplate } from "../common/templates";
import './purchases.style.scss';


interface PurchasesProps extends PanelProps {}

export const Purchases: FC<PurchasesProps> = (props) => {
    const [purchases, setPurchases] = useState<string>();
    
    const headerTemplate = () => {
        return goalFormPanelHeaderTemplate('Purchases');
    }

    const purchasesTextareaChangeHandler = (e: any) => {
        setPurchases(e?.target?.value);
    }

    return (
        <Panel {...props}  headerTemplate={headerTemplate} className="purchases-form-panel" >
            <div className="purchases-form-container">
                <InputTextarea data-testid="purchases-panel-textarea" aria-labelledby="purchases-textarea" value={purchases} onChange={purchasesTextareaChangeHandler} rows={5} cols={30}  />
            </div>
        </Panel>
    )
}