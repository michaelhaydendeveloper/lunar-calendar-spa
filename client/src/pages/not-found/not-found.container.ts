import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { NotFoundActionProps, NotFoundFeature, NotFoundProps } from "./not-found.feature";

const mapStateToProps = (state: RootState): NotFoundProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): NotFoundActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundFeature);