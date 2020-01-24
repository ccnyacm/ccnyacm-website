import { string, any } from 'prop-types';

// this is the structure of requestInfo
// eslint-disable-next-line no-unused-vars
const AxiosConfig = {
  route: string,
  method: string,
  headers: any,
  params: any,
  data: any,
};

/**
 * makes request to api specified in requestInfo
 * @param {AxiosConfig} requestInfo
 * @see https://github.com/axios/axios
 */

export async function apiRequest(route, method, body) {
  try {
    const url = `https://us-central1-ccnyacm-bb351.cloudfunctions.net/ccnyacm${route}`;
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body === null ? null : JSON.stringify(body),
    });
    return response;
  } catch (error) {
    throw error;
  }
}
