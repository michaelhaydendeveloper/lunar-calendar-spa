import { FC } from "react";
import { Button, ButtonProps as prButtonProps } from "primereact/button";

export interface ButtonProps extends prButtonProps {}

export const ButtonComponent: FC<ButtonProps> = (props) => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}
