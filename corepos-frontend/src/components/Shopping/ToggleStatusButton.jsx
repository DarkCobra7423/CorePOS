import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export default function ToggleStatusButton({ productId, initialStatus }) {
    const [isActive, setIsActive] = useState(initialStatus);
    const [loading, setLoading] = useState(false);

    const handleToggle = async () => {
        setLoading(true);
        try {
            // Aquí iría tu llamada al backend para cambiar el estado
            // await updateProductStatus(productId, !isActive);

            setIsActive(!isActive);
        } catch (error) {
            console.error("❌ Error al cambiar estado:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={loading}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
            {isActive ? (
                <FaToggleOn size={30} color="green" />
            ) : (
                <FaToggleOff size={30} color="gray" />
            )}
        </button>
    );
}