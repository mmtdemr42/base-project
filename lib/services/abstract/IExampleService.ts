import { IApiService } from "./IApiBaseSevice";
import { AxiosResponse } from "axios";

export interface IExampleService extends IApiService {
    example<T = any>(url: string): Promise<AxiosResponse<T>>;
}
