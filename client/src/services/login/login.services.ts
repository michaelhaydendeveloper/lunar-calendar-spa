import axios, { AxiosRequestConfig } from 'axios';
import { LoginSubmissionProps } from "../../pages/login/types/login.interfaces";

export const login = async (values: LoginSubmissionProps) => {
    console.log('login.service');
    return await axios.get(
        'localhost/api/v1/login'
    )
        .then(function (response) {
            // handle success
            console.log(response);
            return true;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return true;
        })
        .finally(function () {
            // always executed
        });;
}