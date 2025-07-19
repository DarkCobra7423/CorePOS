import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

export default function GenerateOrderButton({ article }) {
    const [loading, setLoading] = useState(false);

    const handleGenerateOrder = async () => {
        if (!window.confirm(`¿Generar orden de compra para ${article.name}?`)) return;

        setLoading(true);
        try {
            // Aquí va tu lógica de creación de OC. Ejemplo ficticio:
            // await createPurchaseOrder({ articleId: article.id, quantity: article.minStock });

            console.log(`🛒 Orden de compra generada para: ${article.name}`);
            alert('✅ Orden de compra creada exitosamente');
        } catch (error) {
            console.error('❌ Error al generar OC:', error);
            alert('No se pudo generar la orden.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleGenerateOrder}
            disabled={loading}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '0.5rem'
            }}
            title="Generar Orden de Compra"
        >
            <FaPlusSquare size={22} color="#007bff" />
        </button>
    );
}
