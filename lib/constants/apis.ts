import { nodeEnvDevelopment } from "./variables";

export const baseURL = process.env.NODE_ENV === nodeEnvDevelopment ? 'http://localhost:3000' : '';
//Bu kısma her microservis için ekleme yapılacak.

//Örnek URL
export const exampleURL = process.env.NODE_ENV === nodeEnvDevelopment ? 'http://localhost:8080' : '';
export const baseApiURL = `${baseURL}/api`;
