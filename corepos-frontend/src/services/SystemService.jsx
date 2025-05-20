import apiClient from "./apiClient";

export const pingServer = async () => {
    try {
        const response = await apiClient.get('/ping');
        return response.status === 200;
    } catch (error) {
        return false;
    }
};