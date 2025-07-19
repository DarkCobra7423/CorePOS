import React from 'react';
import styled from 'styled-components';
import ModalComponent from '../../components/ModalComponent';
import ContainerGlobal from '../../components/ContainerGlobal';

export default function InventoryStats({ item }) {
  return (

    <>
      <ContainerGlobal style={{ flexDirection: 'column' }}>
        <InventoryTitle>Inventario</InventoryTitle>
        <InventoryData>

          <InfoBlock>
            <strong>Backroom</strong>
            <span>{item.backroomStock}</span>
          </InfoBlock>
          <InfoBlock>
            <strong>Existencia</strong>
            <Value isLow={item.totalStock <= item.minStock}>{item.totalStock}</Value>
          </InfoBlock>
          <InfoBlock>
            <strong>Piso Venta</strong>
            <span>{item.salesFloorStock}</span>
          </InfoBlock>


        </InventoryData>
        <FooterNote>Empaque {item.packageQuantity}</FooterNote>

        <HeaderInventory>
          <ModalComponent
            name="Editar"
            title="Editar Inventario"
            content=""
          />
          <ModalComponent
            name="Referencia Cruzada"
            title='Referencia Cruzada'
          />
        </HeaderInventory>
      </ContainerGlobal>
    </>

  );
}

const InventoryTitle = styled.p`
  font-size: 1.25rem;
  //font-weight: bold;
  margin: 0;
`;

const InventoryData = styled.div`

  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  
`;

const InfoBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  
  strong {
    font-weight: bold;    
    display: block;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 3.25rem;
    font-weight: bold;
  }
`;

const Value = styled.span`
    font-size: 3.25rem;
    color: ${({ isLow }) => (isLow ? 'red' : 'black')};
`;

const FooterNote = styled.span`
  font-size: 1.0rem;
  color: #6b7280;
  //text-align: right;
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