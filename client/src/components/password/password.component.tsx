import { FC } from "react";
import { Password, PasswordProps as prPasswordProps } from "primereact/password";

export interface PasswordProps extends prPasswordProps {}

export const PasswordComponent: FC<PasswordProps> = (props) => {
    return (
        <Password {...props}>
            {props.children}
        </Password>
    )
}
