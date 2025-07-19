import React from 'react';
import styled from 'styled-components';
import GBar from '../../components/GBar';
import GLine from '../../components/GLine';
import Collapse from '../../components/Collapse';
import TableInventory from '../../components/TableInventory';
import ContainerGlobal from '../../components/ContainerGlobal';

const TableTitle = {
    SearchArticle: ['Tipo', 'Fecha y Hora', 'Usuario', 'Cambio'],
};

const tableData = [
    { Tipo: 'Entrada', FechayHora: '2024-11-21 10:24 AM', Usuario: 'C0A0ENU', Cambio: '+10' },
    { Tipo: 'Salida', FechayHora: '2024-11-22 12:00 PM', Usuario: 'J1B3XK9', Cambio: '-5' },
];

export default function InventoryActivity({ item }) {
    return (
        <ContainerGlobal>
            <InventoryTitle>Actividad</InventoryTitle>
            {item && (
                <>
                    <GBar />
                    <GLine />
                    <Collapse
                        title="Buscar Artículo"
                        content={<TableInventory tableTitle={TableTitle.SearchArticle} content={tableData} />}
                    />
                    <Collapse
                        title="Cambio de existencia"
                        content={<TableInventory tableTitle={TableTitle.SearchArticle} content={tableData} />}
                    />
                    <Collapse title='Historial de Picks' content={item.id} />
                    <Collapse title='Cajas Pedi x Res' content='Aquí' />
                    <Collapse title='Cambio Cap. Estante' content='Aquí' />
                    <Collapse title='Venta' content='Aquí' />
                    <Collapse title='Entrega' content='Aquí' />
                    <Collapse title='Escaneo de agotados' content='Aquí' />
                </>
            )}
        </ContainerGlobal>
    );
}

const InventoryTitle = styled.p`
  font-size: 1.25rem;
  //font-weight: bold;
  margin: 0;
`;