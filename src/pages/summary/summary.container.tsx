import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { SummaryActionProps, SummaryFeature, SummaryProps } from "./summary.feature";

const mapStateToProps = (state: RootState): SummaryProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): SummaryActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryFeature);