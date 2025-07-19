import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import ContainerGlobal from '../components/ContainerGlobal';
import { searchArticle } from '../services/ArticleService';
import imgInventory from '../asset/article.png';

import InventoryHeader from '../components/Inventory/InventoryHeader';
import InventoryDetails from '../components/Inventory/InventoryDetails';
import InventoryStats from '../components/Inventory/InventoryStats';
import InventoryLocation from '../components/Inventory/InventoryLocation';
import InventoryActivity from '../components/Inventory/InventoryActivity';
import InventorySearch from '../components/Inventory/InventorySearch';


function Inventory({ item }) {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const [inventoryItem, setInventoryItem] = useState(null);
  const [search, setSearch] = useState(searchValue || item || '');

  useEffect(() => {
    const fetchArticle = async () => {
      if (!search) return;
      const data = await searchArticle(search);
      if (data) {
        const transformed = {
          id: data.id,
          itemNumber: data.numItem || 'N/A',
          name: data.name || 'Nombre no disponible',
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
      } else {
        setInventoryItem(null);
      }
    };

    fetchArticle();
  }, [search]);

  return (
    <Container>
      <ContainerDetails>
        <InventorySearch search={search} setSearch={setSearch} />
        {console.log(inventoryItem)}
        {inventoryItem ? (
          <>

            <InventoryDetails item={inventoryItem} />
            <InventoryStats item={inventoryItem} />
            <InventoryLocation item={inventoryItem} />
            <InventoryActivity item={inventoryItem} />
          </>


        ) : (
          <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <img src={imgInventory} alt="No hay datos" style={{ width: '150px', opacity: 0.5 }} />
            <p>No hay información del artículo</p>
          </div>
        )}
      </ContainerDetails>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

const ContainerDetails = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
  width: 60%;
`;

export default Inventory;