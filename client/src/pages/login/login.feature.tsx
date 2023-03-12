import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { LoginComponent } from "./components/login/login.component";
// import { MailOutline, LockClosedOutline } from "react-ionicons";
// import { InputTextComponent as InputText } from "../../components/input-text";
// import { PasswordComponent as Password } from "../../components/password";
// import { CheckboxComponent as Checkbox } from "../../components/checkbox";

import './styles/login.styles.scss';

export interface LoginProps { }

export interface LoginActionProps { }

export const LoginFeature: FC<LoginProps & LoginActionProps> = () => {

    return (
        <FeatureContainer classes={'login-feature-container'}>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <LoginComponent />
                    </form>
                </div>
            </div>
        </FeatureContainer>
    )
}
