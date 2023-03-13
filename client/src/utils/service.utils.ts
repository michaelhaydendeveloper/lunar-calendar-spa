import axios, { AxiosRequestConfig } from 'axios';
// import { userService } from '../authorization/userService';
import { isDevelopment } from '../utils/process-env-utils';

export interface ApiRequestError {
  status: string;
  code: string;
  message: string;
}

// TODO: Not invoking common Axios initialize code currently in the app. Need to evaluate what can go in here.
export const initializeAxios = () => {
  axios.defaults.headers.common.accept = 'application/json;charset=utf-8';
  if (isDevelopment()) {
    axios.defaults.headers.common.authorization = `${process.env.REACT_APP_AUTHORIZATION_BEARER_TOKEN}`;
  }
};

export const parseResponse = (response: any) => {
  // Success responses
  if (response.status === 204) return { ok: true, data: {} };
  const json = response.data;
  if (response.status === 200 || response.status === 201) return { ok: true, data: json };
  if (response.status >= 400 || response.status <= 499) {
    return {
      ok: false,
      errors: [{ status: response.status, code: json?.errorCode, message: json?.errorMessage }],
    };
  }

  // Default
  return { ok: true, json };
};

export const parseError = async (error: any) => {
//   const localize = await getTextLocalizer('SASCRPlatform-gui-icu');
  const response = error.response;
  if (response) {
    const json = error.response.data;

    if (response.status === 401) {
      return {
        ok: false,
        errors: [
          {
            status: response.status,
            code: 401,
            message: 'error.401.msg', ///localize('error.401.msg'),
          },
        ],
      };
    }

    return {
      ok: false,
      errors: [
        {
          status: response.status,
          code: json.errorCode,
          message:
            // json.errorMessage ?? localize('dialog.errorhandler.label', { status: response.status }),
            'dialog.errorhandler.label'
        },
      ],
    };
  }

  return {
    ok: false,
    errors: [{ code: error.message, message: error.stack }],
  };
};

const getConfig = (baseUrl?: string, params?: object) =>
//   userService.getTokenAsync().then(
//     (token?: string | null) =>
      new Promise<AxiosRequestConfig>((resolve) => {
        const axiosConfig: AxiosRequestConfig = {
          baseURL: baseUrl || process.env.REACT_APP_API_END_POINT,
          headers: {
            Accept: 'application/json',
            // ...(isDevelopment() && { Authorization: `Bearer ${token}` }), // eslint-disable-line  @sas/i18n/jsx-to-localize
          },
          params,
        };
        resolve(axiosConfig);
      })
//   );

export const get = (resource: string, params?: object, baseUrl?: string) =>
  getConfig(baseUrl, params)
    .then((config: AxiosRequestConfig) => axios.get(resource, config))
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));

export const post = async (resource: string, body: object, baseUrl?: string) => {
  const config = await getConfig(baseUrl);
  const result = axios
    .post(resource, body, config)
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
  return result;
};

export const put = async (resource: string, body: object, baseUrl?: string) => {
  const config = await getConfig(baseUrl);
  const result = axios
    .put(resource, body, config)
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
  return result;
};

export const del = (resource: string, baseUrl?: string) => {
  getConfig(baseUrl)
    .then((config: AxiosRequestConfig) => axios.delete(resource, config))
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
};

export const delWithResultReturn = async (resource: string, baseUrl?: string) => {
  const config = await getConfig(baseUrl);
  const result = axios
    .delete(resource, config)
    .then((res) => parseResponse(res))
    .catch((err) => parseError(err));
  return result;
};
