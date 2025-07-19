import apiClient from "./apiClient";

export const showArticle = async (key) => {
    try {
        const response = await apiClient.get(`/articles/${key}`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive item');
    }
}

export const getListArticle = async () => {
    try {
        const response = await apiClient.get(`/articles`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive list items');
    }
}

export const searchArticle = async (value) => {
    try {
        const response = await apiClient.get(`/articles/search?value=${value}`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive item');
    }
}

export const getArticleUpc = async (upc) => {
    try {
        const response = await apiClient.get(`/articles/upc?value=${upc}`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive item');
    }
}

export const fetchStockLow = async () => {
    try {
        const response = await apiClient.get(`/articles/stock-low`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive list items');
    }
}