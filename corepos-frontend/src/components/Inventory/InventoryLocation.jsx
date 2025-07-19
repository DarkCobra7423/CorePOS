import React from 'react';
import styled from 'styled-components';
import ContainerGlobal from '../../components/ContainerGlobal';

export default function InventoryLocation({ item }) {
    return (
        <ContainerGlobal style={{ display: 'block' }}>
            <InventoryTitle>Ubicación</InventoryTitle>

            {item && (
                <>
                    <TableUbication>
                        <tbody>
                            <tr>
                                <TitleUbication>Piso de venta</TitleUbication>
                                <ModularUbication>Sin ubicación modular asignada.  ({item.id})</ModularUbication>
                            </tr>
                            <tr>
                                <TitleUbication>Backroom</TitleUbication>
                                <ModularUbication>Sin BIN asignado.</ModularUbication>
                            </tr>
                        </tbody>
                    </TableUbication>
                    <br />
                    <HeaderInventory>
                        <a href='#'>Artículo Flex</a>
                        <a href='#'>Ver detalles</a>
                    </HeaderInventory>
                </>
            )}
        </ContainerGlobal>
    );
}

const Container = styled.div`
    display: flex;
    overflow: auto;


    justify-content: center;    // centra horizontalmente
    align-items: center;        // centra verticalmente
    
    
`;

const InventoryTitle = styled.p`
  font-size: 1.25rem;
  //font-weight: bold;
  margin: 0;
`;

const TableUbication = styled.table`    
    margin-top: 10px;
    width: 100%;
`;

const TitleUbication = styled.td`
    font-weight: bold;
    font-size: 1.0rem;
`;


const ModularUbication = styled.td`
    font-style: italic;
    font-size: 1.0rem;;
`;

const HeaderInventory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    background-color: #007bff;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 4px;
  }
`;