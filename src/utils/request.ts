import axios, { AxiosRequestConfig } from "axios";

export default async function request<T>(config: AxiosRequestConfig): Promise<T>{
  const { status, data } = await axios(config);

  if (status === 200) {
    return data as T
  }

  return null;
}