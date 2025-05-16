import React from 'react';
import styled from 'styled-components';

const inventoryItems = [
    { code: 'A123', name: 'AXION 750ml', stock: 10, min: 5, price: 35 },
    { code: 'B456', name: 'Cloralex 1L', stock: 3, min: 5, price: 28 },
    { code: 'C789', name: 'Fabuloso Lavanda', stock: 15, min: 10, price: 32 },
    { code: 'C789', name: 'Fabuloso Lavanda', stock: 15, min: 10, price: 32 },
];

function Inventory() {
    return (
        <Container>
            <ContainerList>
                <Title>Inventario</Title>
                <input type='text' placeholder='Search' />
                <InventoryList>
                    {inventoryItems.map((item) => (
                        <MobileCard key={item.code}>
                            <h3>{item.name}</h3>
                            <p>SKU: {item.code}</p>
                            <p>
                                Stock:{' '}
                                <strong style={{ color: item.stock < item.min ? 'red' : 'black' }}>
                                    {item.stock}
                                </strong>{' '}
                                (mín: {item.min})
                            </p>
                            <p>Precio: ${item.price}</p>
                            <Actions>
                                <button>Editar</button>
                                <button>Ajustar stock</button>
                            </Actions>
                        </MobileCard>
                    ))}
                </InventoryList>
            </ContainerList>

            <ContainerDetails>
                <div>
                    <Title>Info. de Articulo</Title>
                </div>
                <ContainerInventory>
                    <TitleRow>
                        <Title style={{ margin: '0' }}>Castrol® Actevo® 4T 20W-50</Title>
                        <Price>$ 350.00</Price>
                    </TitleRow>

                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td>UPC</td>
                                <td>7503131231273</td>
                                <td> </td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Num Art</td>
                                <td>112121123</td>
                                <td>Depto</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Tamaño</td>
                                <td>10V</td>
                                <td>Color</td>
                                <td>BLANCO</td>
                            </tr>
                        </tbody>
                    </table>

                </ContainerInventory>
                <br />

                <ContainerInventory style={{ flexDirection: 'column' }}>
                    <InventoryTitle>Inventario</InventoryTitle>
                    <InventoryData>
                        <Description>
                            <span>Backroom</span>
                            <Value>5</Value>
                        </Description>
                        <Description>
                            <span>Existencia</span>
                            <Value>15</Value>
                        </Description>
                        <Description>
                            <span>Piso de venta</span>
                            <Value>10</Value>
                        </Description>
                    </InventoryData>
                    <FooterNote>Empaque 24</FooterNote>
                </ContainerInventory>
                <br />
                <ContainerInventory style={{ display: 'block' }}>
                    <InventoryTitle>Ubicacion</InventoryTitle>
                    <TableUbication>
                        <tbody>
                            <tr>
                                <TitleUbication style={{ borderBottom: '2px solid #8a8c9c', paddingBottom: '10px' }}>Piso de venta</TitleUbication>
                                <ModularUbication style={{ borderBottom: '2px solid #8a8c9c', paddingBottom: '10px' }}>Sin ubicacion modular asignada.</ModularUbication>
                            </tr>
                            <tr>
                                <TitleUbication style={{ paddingTop: '10px' }}>Backroom</TitleUbication>
                                <ModularUbication style={{ paddingTop: '10px' }}>Sin BIN asignado.</ModularUbication>
                            </tr>

                        </tbody>
                    </TableUbication>
                </ContainerInventory>
                <br />
                <ContainerInventory style={{ display: 'block' }}>
                    <InventoryTitle>Actividad</InventoryTitle>

                </ContainerInventory>
            </ContainerDetails>
        </Container >
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
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;

  span:first-child {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Value = styled.span`
    font-size: 3.25rem;
`;

const FooterNote = styled.span`
  font-size: 1.0rem;
  color: #6b7280;
  //text-align: right;
`;

const Container = styled.div`
    display: flex;
    overflow: auto;
`;

const ContainerInventory = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #8a8c9c;
    border-radius: 1rem;
    padding: 1.5rem;
    gap: 1rem;
    font-size: 1.5rem;

    p{
        margin: 0%;
    }
`;

const ContainerList = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
  width: 40%;
`;

const ContainerDetails = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
  width: 60%;
`;

const Title = styled.h1`
  //margin: 0%;;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #111827;
`;

const InventoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  p {
    margin: 0.25rem 0;
    color: #4b5563;
  }

  strong {
    font-weight: bold;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;

  button {
    margin-right: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #2563eb;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background-color: #1d4ed8;
    }

    &:last-child {
      background-color: #6b7280;

      &:hover {
        background-color: #4b5563;
      }
    }
  }
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

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #1f2937;
`;

export default Inventory;