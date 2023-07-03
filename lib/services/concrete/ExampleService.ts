import { AxiosResponse } from "axios";
import { IExampleService } from "../abstract/IExampleService";
import ApiService from "./ApiService";

export default class ExampleService extends ApiService implements IExampleService {
    example<T = any>(url: string): Promise<AxiosResponse<T, any>> {
        throw new Error("Method not implemented.");
    }
    
}