import { FC } from "react";
import { FeatureContainer } from "../../components/feature-container";
import { LoginComponent } from "./components/login/login.component";
import { LoginSubmissionProps } from "./types/login.interfaces";

import './styles/login.styles.scss';


export interface LoginProps { }

export interface LoginActionProps { 
    submitLogin: (values: LoginSubmissionProps) => void;
}

export const LoginFeature: FC<LoginProps & LoginActionProps> = ({
    submitLogin,
}) => {

    const onSubmitLogin = (values: LoginSubmissionProps) => {
        submitLogin(values);
    }

    return (
        <FeatureContainer classes={'login-feature-container'}>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <LoginComponent onSubmit={onSubmitLogin} />
                    </form>
                </div>
            </div>
        </FeatureContainer>
    )
}
