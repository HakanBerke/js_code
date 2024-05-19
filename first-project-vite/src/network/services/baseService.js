import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})

export const baseService = {
    get: async (enpoint, configs = {}) => {
        try {
            const response = await axiosInstance.get(enpoint, configs);
            return response;
        } catch (error) {
            console.error(`GET ${enpoint} error ${error}`);
            throw error;
        }
    },
    post: async (enpoint, data, configs = {}) => {
        try {
            const response = await axiosInstance.post(enpoint, data, configs)
            return response;
        } catch (error) {
            console.error(`POST ${enpoint} error ${error}`);
            throw error;

        }
    },
    delete: async (enpoint, configs = {}) => {
        try {
            const response = await axiosInstance.delete(enpoint, configs)
            return response;
        } catch (error) {
            console.error(`DELETE ${enpoint} error ${error}`);
            throw error;

        }
    }
}