import { createSlice } from '@reduxjs/toolkit';
import { LoginSubmissionProps } from '../../pages/login/types/login.interfaces';
import { login } from '../../services/login/login.services';
import { thunk } from '../utils/action-utils';

export interface LoginState {}

export const initialState: Readonly<LoginState> = {};

export const loginUser = (values: LoginSubmissionProps, request = thunk) =>
    request({
        execute: (state) => login(values),
        succeeded: (data) => data,
        next: (data, state) => {
            console.log('update state');
            userLoggedIn();
            return true;
        }
    });

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLoggedIn() { 
            console.log('user logged in');
        }
    }
});

export const {
    userLoggedIn
} = loginSlice.actions;

const loginReducer = loginSlice.reducer;
export default loginReducer;