import apiClient from "./apiClient";

export const createPurchaseOrder = async (order) => {
    try {
        const response = await apiClient.post("/purchase-orders", order);
        return response.data;
    } catch (error) {
        console.error("Error creating purchase order:", error.message);
        throw error;
    }
};

export const getAllPurchaseOrders = async () => {
    try {
        const response = await apiClient.get("/purchase-orders");
        return response.data;
    } catch (error) {
        console.error("Error fetching purchase orders:", error.message);
        throw error;
    }
};