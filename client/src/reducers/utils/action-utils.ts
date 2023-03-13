import { appBusy, requestFailed } from '../app.slice';
import { RootState } from '../root.reducer';

export interface Options {
  requested?: () => void;
  execute: (state: any) => void;
  succeeded: (data: any, state: RootState) => void;
  failed?: (error: any) => void;
  next?: (data: any, state: RootState) => void;
  handleAppBusy?: boolean;
}

const states: Options = {
  requested: () => {},
  execute: () => {},
  succeeded: () => {},
  failed: () => {},
  next: () => {},
  handleAppBusy: false,
};

const dispatchAppBusy = (options: Options, dispatch: any, isBusy: boolean) => {
  if (!options.handleAppBusy) {
    dispatch(appBusy(isBusy));
  }
};

export const thunk = (options: Options) => {
  const request = { ...states, ...options };
  return async (dispatch: any, getState: any) => {
    try {
      dispatchAppBusy(options, dispatch, true);
      if (options.requested) {
        dispatch(options.requested());
      }
      const state = getState();
      const result: any = await options.execute(state);

      if (result.ok) {
        dispatch(request.succeeded(result.data, state));
        if (options.next) {
          dispatch(options.next(result.data, state));
        }
      } else {
        dispatch(requestFailed(result.errors[0])); // TODO: Fix to handle multiple errors
        if (request.failed) {
          dispatch(request.failed(result.errors[0]));
        }
      }
      dispatchAppBusy(options, dispatch, false);
    } catch (err: any) {
      console.error(err); // eslint-disable-line no-console
      if (options.failed) {
        dispatch(options.failed(err.toString()));
      }
      dispatchAppBusy(options, dispatch, false);
    }
  };
};
