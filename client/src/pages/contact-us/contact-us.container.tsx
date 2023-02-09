import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { ContactUsActionProps, ContactUsFeature, ContactUsProps } from "./contact-us.feature";

const mapStateToProps = (state: RootState): ContactUsProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): ContactUsActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsFeature);