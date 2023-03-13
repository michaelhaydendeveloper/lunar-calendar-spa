import { connect } from "react-redux";
import { loginUser } from "../../reducers/login/login.slice";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { LoginActionProps, LoginFeature, LoginProps } from "./login.feature";
import { LoginSubmissionProps } from "./types/login.interfaces";

const mapStateToProps = (state: RootState): LoginProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): LoginActionProps => ({
    submitLogin: (values: LoginSubmissionProps) => {
        dispatch(loginUser(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFeature);