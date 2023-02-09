import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { HomeActionProps, HomeFeature, HomeProps } from "./home.feature";

const mapStateToProps = (state: RootState): HomeProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): HomeActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeature);