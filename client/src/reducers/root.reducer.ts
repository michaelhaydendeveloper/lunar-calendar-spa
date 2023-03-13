import { combineReducers } from "redux";
import app from './app.slice';
import login from './login/login.slice';

const rootReducer = combineReducers({
    app,
    login,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;