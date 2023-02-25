import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { LoginActionProps, LoginFeature, LoginProps } from "./login.feature";

const mapStateToProps = (state: RootState): LoginProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): LoginActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFeature);