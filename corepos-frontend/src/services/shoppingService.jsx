import apiClient from "./apiClient";

export const getListSupplier = async () => {
    try {
        const response = await apiClient.get(`/suppliers`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive list suppliers');
    }
}

export const getSearchSupplier = async (value) => {
    try {
        const response = await apiClient.get(`/suppliers/${value}`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive suppliers');
    }
}
