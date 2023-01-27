import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { LunarCalendarActionProps, LunarCalendarFeature, LunarCalendarProps } from "./lunar-calendar.feature";

const mapStateToProps = (state: RootState): LunarCalendarProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): LunarCalendarActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LunarCalendarFeature);