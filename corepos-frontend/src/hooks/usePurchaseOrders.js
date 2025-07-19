import { useEffect, useState } from "react";
import { getAllPurchaseOrders } from "../services/purchaseOrderService";

export default function usePurchaseOrders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('🌀 usePurchaseOrders montado');
        getAllPurchaseOrders()
            .then(setOrders)
            .catch(setError);
    }, []);

    return { orders, error };
}