import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { MailOutline, LockClosedOutline } from "react-ionicons";
import { InputTextComponent as InputText } from "../../components/input-text";
import { PasswordComponent as Password } from "../../components/password";
import { CheckboxComponent as Checkbox } from "../../components/checkbox";

import './styles/login.styles.scss';

export interface LoginProps { }

export interface LoginActionProps { }

export const LoginFeature: FC<LoginProps & LoginActionProps> = () => {

    return (
        <FeatureContainer classes={'login-feature-container'}>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
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
                    </form>
                </div>
            </div>
        </FeatureContainer>
    )
}
