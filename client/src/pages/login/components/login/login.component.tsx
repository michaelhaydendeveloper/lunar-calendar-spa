import { FC } from "react";
import { MailOutline, LockClosedOutline } from "react-ionicons";
import { InputTextComponent as InputText } from "../../../../components/input-text";
import { PasswordComponent as Password } from "../../../../components/password";
import { CheckboxComponent as Checkbox } from "../../../../components/checkbox";

import './login.style.scss';

interface LoginComponentProps { }

export const LoginComponent: FC<LoginComponentProps> = (props) => {
    return (
        <>
            <h2>Login</h2>
            <div className="inputbox">
                <MailOutline></MailOutline>
                <InputText required />
                <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
                <LockClosedOutline></LockClosedOutline>
                <Password required />
                <label htmlFor="">Password</label>
            </div>
            <div className="forget">
                <label htmlFor="">
                    <Checkbox checked />Remember Me
                </label>

            </div>
            <button>Log in</button>
            <div className="register">
                <p>Don't have an account? <a href="#">Register</a></p>
                <p><a href="#">Forgot Password</a></p>
            </div>
        </>
    );
}