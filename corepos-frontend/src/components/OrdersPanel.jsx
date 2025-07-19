import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TableLine from './TableLine';
import ModalComponent from './ModalComponent';
import usePurchaseOrders from '../hooks/usePurchaseOrders';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaClock,
    FaEdit,
    FaPaperPlane,
    FaBoxOpen,
} from "react-icons/fa";

export default function OrdersPanel() {
    const { orders, error } = usePurchaseOrders();
    const [newOrderModalOpen, setNewOrderModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // En OrdersPanel
    console.log("🌀 OrdersPanel montado");
    useEffect(() => {
        console.log("✅ useEffect en OrdersPanel");
    }, []);

    if (error)
        return <p>Error cargando órdenes: {error.message}</p>;
    if (!orders.length)
        return <p>No hay órdenes registradas</p>;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const filteredOrders = orders.filter(o => {
        const orderDate = new Date(o.fechaOrden);
        return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
    });

    const ORDER_STATUS = {
        Borrador: {
            color: '#999',
            icon: <FaEdit color="#888" />,
        },
        Abierta: {
            color: '#999',
            icon: <FaEdit color="#888" />,
        },
        Pendiente: {
            color: 'orange',
            icon: <FaClock color="orange" />,
        },
        Enviada: {
            color: 'blue',
            icon: <FaPaperPlane color="blue" />,
        },
        Parcial: {
            color: '#a0522d',
            icon: <FaBoxOpen color="saddlebrown" />,
        },
        Recibida: {
            color: 'green',
            icon: <FaCheckCircle color="green" />,
        },
        Cancelada: {
            color: 'red',
            icon: <FaTimesCircle color="red" />,
        },
    };


    const rows = filteredOrders.map(o => {

        return [
            //o.orderNumber,
            <span
                key={o.orderNumber}
                style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
                onClick={() => setSelectedOrder(o)}
            >
                {o.orderNumber}
            </span>,
            o.idSupplier,
            new Date(o.fechaOrden).toLocaleDateString(),
            `$${o.totales?.total.toFixed(2)}`,
            <span key={o.id}>
                {ORDER_STATUS[o.status]?.icon}{' '}
                <span style={{ color: ORDER_STATUS[o.status]?.color || 'black' }}>
                    {o.status}
                </span>
            </span>,
        ];
    });

    return (
        <Panel>

            <TitleRow>
                <Title>Órdenes de Compra Recientes</Title>
                <AddButton onClick={() => setNewOrderModalOpen(true)}>+ Nuevo</AddButton>
            </TitleRow>

            {/* Modal para agregar nuevo proveedor */}
            {newOrderModalOpen && (
                <ModalComponent
                    title="Crear Orden de Compra"
                    show={true}
                    onClose={() => setNewOrderModalOpen(false)}
                    onClick={() => {
                        console.log('Guardar orden compra');
                        setNewOrderModalOpen(false);
                    }}
                >
                    <FormField>
                        <label>Nombre</label>
                        <input type="text" />
                    </FormField>
                    <FormField>
                        <label>Email</label>
                        <input type="email" />
                    </FormField>
                    <FormField>
                        <label>Teléfono</label>
                        <input type="text" />
                    </FormField>
                    <FormField>
                        <label>Dirección</label>
                        <input type="text" />
                    </FormField>
                </ModalComponent>
            )}

            {selectedOrder && (
                <ModalComponent
                    title={`Orden de Compra #${selectedOrder.orderNumber}`}
                    show={true}
                    onClose={() => setSelectedOrder(null)}
                    onClick={() => {
                        console.log('Guardar cambios de orden');
                        setSelectedOrder(null);
                    }}
                >
                    <p><strong>Proveedor:</strong> {selectedOrder.idSupplier}</p>
                    <p><strong>Fecha:</strong> {new Date(selectedOrder.fechaOrden).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> ${selectedOrder.totales?.total.toFixed(2)}</p>
                    <p><strong>Estado:</strong> {selectedOrder.status}</p>
                    {/* Agrega más campos aquí si necesitas */}
                </ModalComponent>
            )}

            <TableLine
                headers={['Numero Orden', 'Proveedor', 'Fecha', 'Total', 'Estado']}
                rows={rows}
            />

        </Panel>
    );
}

const Panel = styled.div`
background: #f1f5f9;
border-radius: 12px;
padding: 20px;
box-shadow: inset 0 0 10px #ddd;
`;

const Title = styled.h2`
margin-top: 0;
margin-bottom: 15px;
font-weight: 600;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #444;
  }

  input {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 1.8px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
      outline: none;
    }
  }
`;

/*  Ejemplo de flujo con estados:
 
 👨‍💼 Usuario empieza a crear una orden: → borrador
 
 ✅ Confirma y guarda la orden: → pendiente
 
 📤 La envía al proveedor: → enviada
 
 🚛 Se empieza a recibir mercancía: → parcialmente_recibida
 
 ✅ Se termina de recibir: → recibida
 
 🧾 Se registra la factura / finaliza: → completada
 
 ❌ Si se cancela en cualquier punto: → cancelada 
 */