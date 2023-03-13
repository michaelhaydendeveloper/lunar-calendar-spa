import { FC, useState } from "react";
import { MailOutline, LockClosedOutline } from "react-ionicons";
import { InputTextComponent as InputText } from "../../../../components/input-text";
import { PasswordComponent as Password } from "../../../../components/password";
import { CheckboxComponent as Checkbox } from "../../../../components/checkbox";
import { ButtonComponent as Button } from "../../../../components/button";
import { LoginSubmissionProps } from "../../types/login.interfaces";

import './login.style.scss';

interface LoginComponentProps { 
    onSubmit: (values: LoginSubmissionProps) => void;
}

export const LoginComponent: FC<LoginComponentProps> = ({
    onSubmit,
}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRemeberMe] = useState<boolean>(false);

    const onSubmitLogin = () => {
        onSubmit({
            email,
            password,
            rememberMe,
        });
    }
    
    return (
        <>
            <h2>Login</h2>
            <div className="inputbox">
                <MailOutline></MailOutline>
                <InputText placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                
            </div>
            <div className="inputbox">
                <LockClosedOutline></LockClosedOutline>
                <Password className="login-password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required  feedback={false} />
            </div>
            <div className="forget">
                <label htmlFor="">
                    <Checkbox checked={rememberMe} onChange={e =>  setRemeberMe(e.checked ? true : false) }  /> Remember Me
                </label>

            </div>
            <Button onClick={onSubmitLogin}>Log in</Button>
            <div className="register">
                <p>Don't have an account? <a href="#">Register</a></p>
                <p><a href="#">Forgot Password</a></p>
            </div>
        </>
    );
}