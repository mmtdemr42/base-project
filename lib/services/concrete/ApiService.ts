
    import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
    import { IApiService } from "../abstract/IApiBaseSevice";

    /*
    *   Example Request
    *   const response = await apiService.get("/users", token);
    */

    export default class ApiService implements IApiService{
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
        baseURL,
        });

        this.axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = config.headers.Authorization;
            if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error: any) => Promise.reject(error)
        );
    }

    public async get<T = any>(url: string, token: string | null = null): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, { headers: { Authorization: token } });
    }

    public async post<T = any>(url: string, data: any, token: string | null = null): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, { headers: { Authorization: token } });
    }

    public async put<T = any>(url: string, data: any, token: string | null = null): Promise<AxiosResponse<T>> {
        return this.axiosInstance.put<T>(url, data, { headers: { Authorization: token } });
    }

    public async delete<T = any>(url: string, token: string | null = null): Promise<AxiosResponse<T>> {
        return this.axiosInstance.delete<T>(url, { headers: { Authorization: token } });
    }
    }