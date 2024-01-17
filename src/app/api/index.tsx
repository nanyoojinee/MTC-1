import axios, { AxiosResponse } from 'axios';

const backendPort = '8080';
const serverUrl = `http://${window.location.hostname}:${backendPort}`;

interface RequestOptions {
  headers: {
    Authorization: string;
    'Content-Type'?: string;
  };
}

async function get<T>(endpoint: string, params: string = ''): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${serverUrl}${endpoint}/${params}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function post<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.post<T>(`${serverUrl}${endpoint}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function formPost<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
  return axios.post<T>(`${serverUrl}${endpoint}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function put<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.put<T>(`${serverUrl}${endpoint}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

async function delItem<T>(endpoint: string, params: string = ''): Promise<AxiosResponse<T>> {
  return axios.delete<T>(`${serverUrl}${endpoint}/${params}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
}

export { get, post, formPost, put, delItem as del };
