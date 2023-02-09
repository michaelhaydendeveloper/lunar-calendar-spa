import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { NavigationActionProps, NavigationFeature, NavigationProps } from "./navigation.feature";

const mapStateToProps = (state: RootState): NavigationProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): NavigationActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationFeature);