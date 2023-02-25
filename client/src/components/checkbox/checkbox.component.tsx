import { FC } from "react";
import { Checkbox, CheckboxProps as prCheckboxProps } from "primereact/checkbox";

export interface CheckboxProps extends prCheckboxProps {}

export const CheckboxComponent: FC<CheckboxProps> = (props) => {
    return (
        <Checkbox {...props}>
            {props.children}
        </Checkbox>
    )
}
