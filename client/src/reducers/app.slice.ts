import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiRequestError } from "../services/types/request.types";
import { AppNotifyCode } from "./common/common.types";
import { thunk } from "./utils/action-utils";

export interface AppState {
    isBusy: boolean;
    queryingCount: number;
    isError: boolean;
    errorCode?: string;
    errorMessage?: string;
    apiBuildNo?: string;
    notify: AppNotifyState;
  }
  export const initialAppNotifyState: Readonly<AppNotifyState> = {
    code: AppNotifyCode.Undefined,
    entity: undefined,
    count: undefined,
  };
  
  export const initialState: Readonly<AppState> = {
    isBusy: false,
    queryingCount: 0,
    isError: false,
    apiBuildNo: undefined,
    notify: { ...initialAppNotifyState },
  };
  
  interface AppNotifyState {
    code: AppNotifyCode;
    entity?: string;
    count?: number;
  }
  
  export const appNotify = (code: AppNotifyCode, entity?: string, count?: number) => {
    const DEFAULT_TOAST_DURATION = 2500;
    const timeoutInterval = process.env.REACT_APP_TOAST_DURATION
      ? parseInt(process.env.REACT_APP_TOAST_DURATION)
      : DEFAULT_TOAST_DURATION;
  
    return (dispatch: any) => {
      dispatch(notify({ code, entity, count }));
      setTimeout(() => dispatch(dismissNotify()), timeoutInterval);
    };
  };
  
  export const getApiInfo = (request = thunk) =>
    request({
    //   execute: (_state, service = api) => service.applicationInformation.getInfo(),
        execute: (state) => { return {detail: { buildNumber: '123'}} },
        succeeded: (data) => getApiInfoSuccess(data.detail.buildNumber),
    });

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        dateSelected() { },
        appBusy(state, action: PayloadAction<boolean>) {
            state.queryingCount = state.queryingCount + (action.payload ? 1 : -1);
            state.isBusy = state.queryingCount > 0;
        },
        requestFailed(state, action: PayloadAction<ApiRequestError>) {
            state.isError = true;
            state.errorCode = action.payload.code;
            state.errorMessage = action.payload.message;
        },
        dismissRequestReturnedError(state) {
            state.isError = false;
            state.errorCode = '';
            state.errorMessage = '';
        },
        notify(state, action: PayloadAction<AppNotifyState>) {
            state.notify = action.payload;
        },
        dismissNotify(state) {
            state.notify = { ...initialAppNotifyState };
        },
        getApiInfoSuccess(state, action: PayloadAction<string>) {
            state.apiBuildNo = action.payload;
        },
    }
});

export const {
    dateSelected,
    appBusy,
    requestFailed,
    dismissRequestReturnedError,
    notify,
    dismissNotify,
    getApiInfoSuccess,
} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;