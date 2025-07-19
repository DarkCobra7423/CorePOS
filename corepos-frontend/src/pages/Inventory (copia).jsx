import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GBar from '../components/GBar';
import GLine from '../components/GLine';
import Collapse from '../components/Collapse';
import TableInventory from '../components/TableInventory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { showArticle, getListArticle, searchArticle } from '../services/ArticleService';
import ModalComponent from '../components/ModalComponent';
import { useSearchParams } from 'react-router-dom';
import ContainerGlobal from '../components/ContainerGlobal';
import imgInventory from '../asset/article.png';

const TableTitle = {
  SearchArticle: ['Tipo', 'Fecha y Hora', 'Usuario', 'Cambio'],
  ChangeExistence: ['Tipo', 'Fecha y Hora', 'Usuario', 'Cambio']
}

const tableData = [
  {
    Tipo: 'Entrada',
    FechayHora: '2024-11-21 10:24 AM',
    Usuario: 'C0A0ENU',
    Cambio: '+10'
  },
  {
    Tipo: 'Salida',
    FechayHora: '2024-11-22 12:00 PM',
    Usuario: 'J1B3XK9',
    Cambio: '-5'
  }
];

function Inventory() {
  //http://localhost:5173/inventory?search=75012231231213
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  //const [inventoryItems, setInventoryItems] = useState([]);
  const [inventoryItem, setInventoryItem] = useState(null);
  //const [Search, setSearch] = useState(searchValue);
  const [open, setOpen] = useState(false);
  const [Search, setSearch] = useState(searchValue || "");

  const toggleDropdown = () => setOpen(!open);

  /* useEffect(() => {
    
    const fetchInventory = async () => {
      try {
        const data = await getListArticle();

        const mappedItems = data.map(item => ({
          id: item.id,
          name: item.name,
          stock: item.totalStock,
          min: item.minStock,
          price: item.price,
          upc: item.upc,
        }));

        setInventoryItems(mappedItems);
      } catch (error) {
        console.error('Error cargando inventario', error);
      }
    };

    fetchInventory();
  }, []); */

  useEffect(() => {
    const fetchArticle = async () => {
      if (!Search) return; // evita llamadas innecesarias
      const data = await searchArticle(Search);
      if (data) {

        const transformed = {
          id: data.id,
          itemNumber: data.numItem || 'N/A',
          name: data.name || 'Nombre no disponible',
          /*stock: data.totalStock || 0,*/
          price: data.price || 0,
          upc: data.upc,
          size: data.size,
          color: data.color,
          minStock: data.stock.minStock,
          maxStock: data.stock.maxStock,
          department: data.department.num,
          backroomStock: data.stock.backroomStock,
          salesFloorStock: data.stock.salesFloorStock,
          packageQuantity: data.packageQuantity,
          previousPrice: data.previousPrice,
          totalStock: data.totalStock,
          margin: data.margin,
        };
        setInventoryItem(transformed);
        //console.log(transformed);
      } else {
        setInventoryItem(null); // limpia si no encuentra
      }
    };

    fetchArticle();
  }, [Search]);

  return (
    <Container>
      {/* <ContainerList>

        <HeaderInventory className="header">
          <Title>Inventario</Title>
          <a href="/newarticle">Nuevo Artículo</a>
        </HeaderInventory>

        <input
          type="text"
          placeholder="Search Article"
          value={articleKey}
          onChange={handleInputChange}
          style={{ marginTop: '1rem', padding: '0.5rem', width: '300px' }}
        />

        <InventoryList>
          {inventoryItems.map((item) => (
            <MobileCard key={item.id}>
              <h3>{item.name}</h3>
              <p>UPC: {item.upc}</p>
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
 */}
      <ContainerDetails>
        <HeaderItem>
          <Title>Info. de Articulo</Title>
          <InputContainer>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" /></g></svg>

              <input
                placeholder="Search Item"
                type="search"
                className="input"
                value={Search ?? ""}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </InputContainer>
        </HeaderItem>

        {/* {inventoryItems.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}


        {inventoryItems.map((item) => {
          console.log('Renderizando item:', item);
          return <h1 key={item.id}>{item.name}</h1>;
        })} */}


        {inventoryItem ? (
          <div key={inventoryItem.id}>
            <ContainerGlobal>
              <TitleRow>
                <Title style={{ margin: '0', textTransform: 'uppercase' }}>{inventoryItem.name}</Title>
                <Price>$ {inventoryItem.price}
                  <DropdownContainer>
                    <DropdownButton onClick={toggleDropdown}>
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </DropdownButton>

                    {open && (
                      <DropdownContent>
                        <DropdownItem href="#">{inventoryItem.name}</DropdownItem>
                        <DropdownItem href="#">Precio Anterior: $ {inventoryItem.previousPrice}</DropdownItem>
                        <DropdownItem href="#">Margen: {inventoryItem.margin} %</DropdownItem>
                        <DropdownItem href="#">Min Stock: {inventoryItem.minStock}</DropdownItem>
                        <DropdownItem href="#">Max Stock: {inventoryItem.maxStock}</DropdownItem>
                      </DropdownContent>
                    )}
                  </DropdownContainer>

                  {/* <IconButton onClick={() => setShowInfo(!showInfo)}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </IconButton>
                  {showInfo && (
                    <InfoBox>
                      <strong>Información:</strong>
                      <p>Este producto es importado y cuenta con garantía internacional.</p>
                    </InfoBox>
                  )} */}
                </Price>
              </TitleRow>

              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td>UPC</td>
                    <td>{inventoryItem.upc}</td>
                    <td> </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Num Art</td>
                    <td>{inventoryItem.itemNumber}</td>
                    <td>Depto</td>
                    <td>{inventoryItem.department}</td>
                  </tr>
                  <tr>
                    <td>Tamaño</td>
                    <td>{inventoryItem.size}</td>
                    <td>Color</td>
                    <td>{inventoryItem.color}</td>
                  </tr>
                </tbody>
              </table>

            </ContainerGlobal>


            <ContainerGlobal style={{ flexDirection: 'column' }}>
              <InventoryTitle>Inventario</InventoryTitle>
              <InventoryData>
                <Description>
                  <span>Backroom</span>
                  <Value>{inventoryItem.backroomStock}</Value>
                </Description>
                <Description>
                  <span>Existencia</span>
                  <Value isLow={inventoryItem.totalStock <= inventoryItem.minStock}>
                    {inventoryItem.totalStock}
                  </Value>
                </Description>
                <Description>
                  <span>Piso de venta</span>
                  <Value>{inventoryItem.salesFloorStock}</Value>
                </Description>
              </InventoryData>
              <FooterNote>Empaque {inventoryItem.packageQuantity}</FooterNote>
              <HeaderInventory className="header">
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

            <ContainerGlobal style={{ display: 'block' }}>
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
              <br />
              <HeaderInventory className="header">
                <a href='#'>Articulo Flex</a>
                <a href='#'>Ver detalles</a>

              </HeaderInventory>
            </ContainerGlobal>

            <ContainerGlobal style={{ display: 'block' }}>
              <InventoryTitle>Actividad</InventoryTitle>

              <GBar></GBar>

              <GLine></GLine>

              <Collapse
                title="Buscar Artículo"
                content={
                  <TableInventory
                    tableTitle={TableTitle.SearchArticle}
                    content={tableData}
                  />
                }
              />

              <Collapse
                title="Cambio de existencia"
                content={
                  <TableInventory
                    tableTitle={TableTitle.SearchArticle}
                    content={tableData}
                  />
                }
              />

              <Collapse
                title='Historial de Picks'
                content='Aqui'
              ></Collapse>
              <Collapse
                title='Cajas Pedi x Res'
                content='Aqui'
              ></Collapse>
              <Collapse
                title='Cambio Cap. Estante'
                content='Aqui'
              ></Collapse>
              <Collapse
                title='Venta'
                content='Aqui'
              ></Collapse>
              <Collapse
                title='Entrega'
                content='Aqui'
              ></Collapse>
              <Collapse
                title='Escaneo de agotados'
                content='Aqui'
              ></Collapse>
            </ContainerGlobal>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <img src={imgInventory} alt="No hay datos" style={{ width: '150px', opacity: 0.5 }} />
            <p>No hay información del artículo</p>
          </div>
        )}
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
    color: ${({ isLow }) => (isLow ? 'red' : 'black')};
`;

const FooterNote = styled.span`
  font-size: 1.0rem;
  color: #6b7280;
  //text-align: right;
`;

const Container = styled.div`
    display: flex;
    overflow: auto;


    justify-content: center;    // centra horizontalmente
    align-items: center;        // centra verticalmente
    
    
`;

const ContainerInventory = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #8a8c9c;
    border-radius: 1rem;
    padding: 1.5rem;
    gap: 1rem;
    //font-size: 1.5rem;

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

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #1f2937;
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

const HeaderItem = styled.div`
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

const InputContainer = styled.div`
  width: 35%;

  .group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
  }

  .input {
   width: 100%;
   height: 40px;
   line-height: 28px;
   padding: 0 1rem;
   padding-left: 2.5rem;
   border: 2px solid transparent;
   border-radius: 8px;
   outline: none;
   background-color: #f3f3f4;
   color: #0d0c22;
   transition: .3s ease;
  }

  .input::placeholder {
   color: #9e9ea7;
  }

  .input:focus, input:hover {
   outline: none;
   border-color: rgba(234,76,137,0.4);
   background-color: #fff;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
   position: absolute;
   left: 1rem;
   fill: #9e9ea7;
   width: 1rem;
   height: 1rem;
  }`;

const IconButton = styled.button`

  background: transparent;
  border: none;
  cursor: pointer;
  color: #0077cc;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: #e0f0ff;
  }
`;

const InfoBox = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  width: 250px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px 5px;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #263fcf;
  //padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* &:after {
    content: " ▼";
    font-size: 0.7rem;
  } */
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;

  font-size: 11px;
  font-weight: normal;
  padding: 10px 14px;
  //transform: translateX(-87%);
  right: 0;
  left: auto;

`;

const DropdownItem = styled.a`
  display: block;
  //padding: 10px 14px;
  color: #333;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }
`;
export default Inventory;