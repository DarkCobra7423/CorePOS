import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComponent from './ModalComponent';

export default function ReportsPanel() {

  const [activeReport, setActiveReport] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpenModal = (reportName) => {
    setActiveReport(reportName);
    setStartDate('');
    setEndDate('');
  };

  return (
    <Panel>
      <Title>Generar Informes</Title>
      <ListWrapper>
        <h3>📦 Informes de Inventario</h3>
        <ListItem onClick={() => handleOpenModal('Stock actual por producto')}>
          Stock actual por producto
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Productos con bajo stock')}>
          Productos con bajo stock
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Productos sin movimiento')}>
          Productos sin movimiento
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Historial de movimientos de inventario')}>
          Historial de movimientos de inventario
        </ListItem>

        <h3>🛒 Informes de Compras</h3>
        <ListItem onClick={() => handleOpenModal('Órdenes de compra (OC) emitidas')}>
          Órdenes de compra (OC) emitidas
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Órdenes de compra pendientes de recibir')}>
          Órdenes de compra pendientes de recibir
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Historial de compras por proveedor')}>
          Historial de compras por proveedor
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Costo promedio por producto')}>
          Costo promedio por producto
        </ListItem>

        <h3>📈 Informes de Análisis</h3>
        <ListItem onClick={() => handleOpenModal('Comparativo mensual de compras')}>
          Comparativo mensual de compras
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Proveedores más utilizados')}>
          Proveedores más utilizados
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Tiempo promedio de entrega por proveedor')}>
          Tiempo promedio de entrega por proveedor
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Proyecciones de compra')}>
          Proyecciones de compra
        </ListItem>

        <ListItem onClick={() => handleOpenModal('Productos por vencer (si aplica a perecederos).')}>
          Productos por vencer (si aplica a perecederos).
        </ListItem>
        <ListItem onClick={() => handleOpenModal('OCs con más de X días sin recibir.')}>
          OCs con más de X días sin recibir.
        </ListItem>
        <ListItem onClick={() => handleOpenModal('Cambios significativos en precios de proveedores.')}>
          Cambios significativos en precios de proveedores.
        </ListItem>
      </ListWrapper>

      {activeReport && (
        <ModalComponent
          //name="generarReporte"
          title={`Generar reporte: ${activeReport}`}
          show={true}
          onClose={() => setActiveReport(null)}
          onClick={() => {
            alert(`Generando reporte: ${activeReport} del ${startDate} al ${endDate}`);
            setActiveReport(null);
          }}
          disabled={!startDate || !endDate}
        >
          <FormField>
            <label>Fecha inicio</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FormField>

          <FormField>
            <label>Fecha fin</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </FormField>
        </ModalComponent>
      )}
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

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const ListWrapper = styled.div`
  max-height: 320px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  padding: 8px 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    text-decoration: underline;
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

  input[type="date"] {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 1.8px solid #ccc;
    border-radius: 8px;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
  }
`;
