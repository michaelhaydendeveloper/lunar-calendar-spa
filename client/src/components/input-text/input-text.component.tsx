import { FC } from "react";
import { InputText, InputTextProps as prInputTextProps } from "primereact/inputtext";

export interface InputTextProps extends prInputTextProps {}

export const InputTextComponent: FC<InputTextProps> = (props) => {
    return (
        <InputText {...props}>
            {props.children}
        </InputText>
    )
}
