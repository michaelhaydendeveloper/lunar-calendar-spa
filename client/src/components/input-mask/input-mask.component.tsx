import { FC } from "react";
import { InputMask, InputMaskProps as prInputMaskProps } from "primereact/inputmask";

export interface InputMaskProps extends prInputMaskProps {}

export const InputMaskComponent: FC<InputMaskProps> = (props) => {
    return (
        <InputMask {...props}>
            {props.children}
        </InputMask>
    )
}
