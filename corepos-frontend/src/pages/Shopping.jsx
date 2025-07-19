import React, { useState, useEffect } from 'react';
import ContainerGlobal from '../components/ContainerGlobal';
import TitleGlobal from '../components/TitleGlobal';
import useSuppliers from '../hooks/useSuppliers';
import SupplierPanel from '../components/SupplierPanel';
import ReportsPanel from '../components/ReportsPanel';
import OrdersPanel from '../components/OrdersPanel';
import styled from 'styled-components';
import TableLine from '../components/TableLine';
import useStockLow from '../hooks/useStockLow';
import ModalComponent from '../components/ModalComponent';
import Inventory from '../pages/Inventory';
import ToggleStatusButton from '../components/Shopping/ToggleStatusButton';
import GenerateOrderButton from '../components/Shopping/GenerateOrderButton';
import { BadgeWarning, BadgeDanger } from '../components/Badges/Badges';

export default function Shopping() {
    const { articles, error } = useStockLow();
    const [selectedArticle, setSelectedArticle] = useState(null);

    if (error) return <div>Error al cargar los artículos.</div>;

    const rows = articles.map(article => {

        // Al principio de Shopping.jsx
        console.log("📦 Shopping render");

        return [
            article.upc,
            //article.itemNumber,
            <span
                key={article.id}
                style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => setSelectedArticle(article)}
            >
                {article.itemNumber}
            </span>,
            'SKU123', // 👈 Aquí podrías conectar con proveedor si lo tuvieras
            article.name,
            'ProveedorX', // 👈 También puedes conectar con proveedor real si lo tienes
            article.department,
            article.totalStock <= 5
                ? <BadgeDanger key={`badge-${article.id}`}>{article.totalStock}</BadgeDanger>
                : <BadgeWarning key={`badge-${article.id}`}>{article.totalStock}</BadgeWarning>,
            article.minStock,
            article.maxStock,
            `$${article.cost ?? 0}`,
            <>
                <ToggleStatusButton
                    productId={article.id}
                    initialStatus={article.isActive}
                />
                <GenerateOrderButton article={article} />
            </>
        ];
    });

    return (
        <>
            <ContainerGlobal>
                <TitleGlobal>🛒 Gestión de Compras y Proveedores</TitleGlobal>
                <TableLine
                    headers={['UPC', 'NumArt', 'SKU Prov', 'Descripcion', 'Proveedor', 'Depto', 'Stock', 'Mín', 'Max', 'costo', 'Activo / + OC']}
                    rows={rows}
                    size={'14rem'}
                />

                {/* Modal al hacer click en itemNumber */}
                {selectedArticle && (
                    <ModalComponent
                        title="Detalles del Artículo"
                        show={true}
                        onClose={() => setSelectedArticle(null)}
                        size='60%'
                        onClick={() => {
                            console.log('Guardar cambios de artículo', selectedArticle);
                            setSelectedArticle(null);
                        }}
                    >
                        <Inventory item={selectedArticle.itemNumber} />

                    </ModalComponent>
                )}

                <br />
                <MainGrid>
                    <SupplierPanel />
                    <ReportsPanel />
                    <OrdersPanel />
                </MainGrid>
            </ContainerGlobal>
        </>
    );
}

/* const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 25px;
`; */

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 25px;
  position: static;     // asegurarte que no sea relative
  overflow: visible;    // no limites el overflow
  z-index: auto;        // evita conflictos de profundidad
`;



/* 📦 Informes de Inventario

    Stock actual por producto

        Nivel actual de inventario.

        Incluye mínimos y máximos recomendados.

    Productos con bajo stock

        Lista de artículos que están por debajo del umbral mínimo.

        Prioriza la reposición.

    Productos sin movimiento

        Inventario que no se ha vendido en X días / semanas.

        Ayuda a identificar sobreabastecimiento o productos obsoletos.

    Historial de movimientos de inventario

Entradas(compras), salidas(ventas, ajustes), devoluciones.

🛒 Informes de Compras

    Órdenes de compra(OC) emitidas

Fecha, proveedor, estado(pendiente, parcial, completa), monto.

    Órdenes de compra pendientes de recibir

        OC emitidas que aún no han sido completadas o entregadas.

    Historial de compras por proveedor

        Cuánto y con qué frecuencia se compra a cada proveedor.

        Ideal para negociaciones y análisis de dependencia.

    Costo promedio por producto

        Basado en las últimas compras.

        Útil para evaluar márgenes de ganancia y cambios de precio.

📈 Informes de Análisis

    Comparativo mensual de compras

        Total gastado mes a mes.

        Permite identificar tendencias o irregularidades.

    Proveedores más utilizados

        En base a volumen de compra o valor monetario.

    Tiempo promedio de entrega por proveedor

        Desde la creación de la OC hasta la recepción.

        Detecta retrasos o proveedores ineficientes.

    Proyecciones de compra

        Basado en ventas y estacionalidad.

        Ayuda a planear compras futuras.

✅ Bonus: Alertas automáticas útiles

    Productos por vencer(si aplica a perecederos).

    OCs con más de X días sin recibir.

    Cambios significativos en precios de proveedores. */