import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
    key: "cda0e9cc40de4bdc92be94c16cc00783"
    }
});

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) =>{
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data);
    }

    post(data: T) {
        return axiosInstance.post<T>(this.endpoint, data);
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
    }
}

export default ApiClient;

