import { connect } from "react-redux";
import { RootState } from "../../reducers/root.reducer";
import { AppDispatch } from "../../reducers/store";
import { HomeActionProps, HomeFeature, HomeProps } from "./home.feature";

const mapStateToProps = (state: RootState): HomeProps => ({
    // selectedStartDate: state.selected.startDate,
    // selectedFinishDate: state.selected.FinishDate
});

const mapDispatchToProps = (dispatch: AppDispatch): HomeActionProps => ({
    updateStartDate: () => console.log('updateStartDate'),
    getStartDate: () => console.log('getStartDate'),
    updateFinishDate: () => console.log('updateFinishDate'),
    getFinishDate: () => console.log('getFinishDate'),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeature);