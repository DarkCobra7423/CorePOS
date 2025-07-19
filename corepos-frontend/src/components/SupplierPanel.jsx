import React, { useState } from 'react';
import styled from 'styled-components';
import ModalComponent from './ModalComponent';
import SupplierForm from './SupplierForm';
import useSuppliers from '../hooks/useSuppliers';

const SupplierPanel = ({ }) => {

  const { suppliers } = useSuppliers();
  const [search, setSearch] = useState('');
  const [ocModalId, setOcModalId] = useState(null);
  const [activeModalId, setActiveModalId] = useState(null);

  const filtered = suppliers.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const [newSupplierModalOpen, setNewSupplierModalOpen] = useState(false);

  return (
    <>

      <Panel>
        <TitleRow>
          <Title>Proveedores</Title>
          <AddButton onClick={() => setNewSupplierModalOpen(true)}>+ Nuevo</AddButton>
        </TitleRow>

        <SearchInput
          type="text"
          placeholder="Buscar proveedor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Modal para agregar nuevo proveedor */}
        {newSupplierModalOpen && (
          <ModalComponent
            title="Agregar Nuevo Proveedor"
            show={true}
            onClose={() => setNewSupplierModalOpen(false)}
            onClick={() => {
              console.log('Guardar proveedor');
              setNewSupplierModalOpen(false);
            }}
            size={'700px'}
          >
            <SupplierForm

            />
          </ModalComponent>
        )}

        {/* Lista de proveedores */}
        <ListWrapper>
          {filtered.map((supplier) => {

            return (
              <React.Fragment key={supplier.id}>
                <SupplierRow>
                  <SupplierName onClick={() => setActiveModalId(supplier.id)}>
                    {supplier.name}
                  </SupplierName>
                  <OCButton onClick={() => setOcModalId(supplier.id)}>OC</OCButton>
                </SupplierRow>

                {activeModalId === supplier.id && (
                  <ModalComponent
                    key={`details-${supplier.id}`}
                    title="Detalles del Proveedor"
                    show={true}
                    onClose={() => setActiveModalId(null)}
                    onClick={() => { }}
                    size={'700px'}
                  >
                    <SupplierForm
                      data={supplier}
                    />
                    {console.log('Detalles del proveedor', supplier)}
                  </ModalComponent>
                )}

                {ocModalId === supplier.id && (
                  <ModalComponent
                    //key={`oc-${supplier.id}`}
                    title="Crear Orden de Compra"
                    show={true}
                    onClose={() => setOcModalId(null)}
                    onClick={() => {
                      console.log("Generar OC para:", supplier);
                      setOcModalId(null);
                    }}
                  >
                    <p>📝 Orden de compra para: <strong>{supplier.name}</strong></p>
                    <p>ID: {supplier.id}</p>
                    <p>Contacto: {supplier.contactName}</p>
                    <p>RFC: {supplier.rfc}</p>
                  </ModalComponent>
                )}
              </React.Fragment>
            );
          })}
        </ListWrapper>
      </Panel>


    </>
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
`;

const SupplierRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const SupplierName = styled.span`
  cursor: pointer;
  font-weight: 500;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const OCButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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

export default SupplierPanel;