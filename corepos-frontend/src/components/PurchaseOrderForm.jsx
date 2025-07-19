import React, { useState } from 'react';
import { createOrder } from '../services/purchaseOrderService';

const PurchaseOrderForm = () => {
    const [formData, setFormData] = useState({
        orderNumber: '',
        idSupplier: '',
        idDeterminant: '',
        status: 'pendiente',
        moneda: 'MXN',
        tipoCambio: 1,
        fechaOrden: '',
        fechaEntrega: '',
        notas: '',
        creadoPor: 'admin',
        articles: [],
        totales: {
            subtotal: 0,
            descuentos: 0,
            impuestos: 0,
            total: 0
        },
        historial: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // puedes agregar lógica para calcular totales aquí

        try {
            const response = await createOrder({
                ...formData,
                fechaOrden: new Date(),
                fechaEntrega: new Date(),
                fechaCreacion: new Date(),
                ultimaActualizacion: new Date(),
                historial: [
                    {
                        fecha: new Date(),
                        accion: 'Orden creada',
                        usuario: formData.creadoPor
                    }
                ]
            });
            alert('Orden creada correctamente');
            console.log(response.data);
        } catch (error) {
            console.error('Error al crear orden', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Orden de Compra</h2>
            <input name="orderNumber" placeholder="Número de orden" onChange={handleChange} />
            <input name="idSupplier" placeholder="ID proveedor" onChange={handleChange} />
            <input name="idDeterminant" placeholder="Almacén destino" onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default PurchaseOrderForm;