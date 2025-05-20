import apiClient from "./apiClient";

export const createSale = async (saleRequest) => {
    try {
        const response = await apiClient.post('/sales', saleRequest);
        return response.data;
    } catch (error) {
        console.error('Error al crear la venta:', error.response?.data || error.message);
        throw error; // Propaga el error para manejarlo desde el componente si es necesario
    }
};

export const getPromotion = async (key) => {
    try {
        const response = await apiClient.get(`/promotion/${key}`);
        return response.data;
    } catch (error) {
        console.error('Failed to retrive item');
    };
}

export const getPromotionList = async (upc, quantity) => {
    try {
        const response = await apiClient.get(`/promotion/by-upc/${upc}/${quantity}`);

        // Verifica que la respuesta tenga un status 2xx (200 OK)
        if (response.status >= 200 && response.status < 300) {
            return response.data;  // Devuelve los datos directamente
        } else {
            console.error(`Error en la solicitud: ${response.status}`);
            return null; // Si no es una respuesta válida, devuelve null
        }
    } catch (error) {
        console.error("Error al obtener la promoción:", error.response?.data || error.message);
        return null; // Devuelve null si ocurre un error
    }
};