import { AxiosResponse } from "axios";

export interface IApiService {
  get<T = any>(url: string): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data: any): Promise<AxiosResponse<T>>;
  put<T = any>(url: string, data: any): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string): Promise<AxiosResponse<T>>;
}
