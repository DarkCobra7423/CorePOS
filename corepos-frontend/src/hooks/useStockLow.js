import { useEffect, useState } from 'react';
import { fetchStockLow } from '../services/ArticleService';

export default function useStockLow() {
    const [articles, setArticles] = useState([]); // 👈 cambia a array
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await fetchStockLow();

                const transformed = data.map((item) => ({
                    id: item.id,
                    itemNumber: item.numItem || 'N/A',
                    name: item.name || 'Nombre no disponible',
                    price: item.price || 0,
                    cost: item.cost || 0,
                    upc: item.upc,
                    size: item.size,
                    color: item.color,
                    minStock: item.stock?.minStock ?? 0,
                    maxStock: item.stock?.maxStock ?? 0,
                    department: item.department?.num || '',
                    backroomStock: item.stock?.backroomStock ?? 0,
                    salesFloorStock: item.stock?.salesFloorStock ?? 0,
                    packageQuantity: item.packageQuantity,
                    previousPrice: item.previousPrice,
                    totalStock: item.totalStock,
                    margin: item.margin,
                }));

                setArticles(transformed);
            } catch (err) {
                setError(err);
                console.error('Error fetching stock:', err);
            }
        };

        fetchArticles();
    }, []);

    return { articles, error }; // 👈 también cambia el nombre aquí
}