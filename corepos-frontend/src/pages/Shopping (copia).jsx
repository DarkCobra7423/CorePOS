import React, { use, useEffect, useState } from 'react';
import ContainerGlobal from "../components/ContainerGlobal";
import TitleGlobal from "../components/TitleGlobal";
import { styled } from 'styled-components';
import ModalComponent from '../components/ModalComponent';
import Input from '../components/Input';
import { getListSupplier, getSearchSupplier } from '../services/shoppingService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import TableLine from '../components/TableLine';
import InformesPanel from '../components/ModalReports';

export default function Shopping() {

    const [search, setSearch] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalNuevoArticuloOpen, setIsModalNuevoArticuloOpen] = useState(false);
    const [suppliers, setSuppliers] = useState([]);

    const filteredSuppliers = suppliers.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const data = await getListSupplier();

                const mappedData = data.map(item => ({
                    id: item.idSuplier,
                    name: item.name,
                    email: item.email,
                    contactName: item.contactName,
                    phone: item.phone,
                    address: `${item.address.street} ${item.address.zipCode} ${item.address.state} ${item.address.city}`,
                    rfc: item.rfc,
                    active: item.active,
                }));
                setSuppliers(mappedData);
                console.log("Suppliers fetched:", mappedData);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        }

        fetchSuppliers();
    }, []);


    const [products, setProducts] = useState([
        { id: 1, upc: '750123456789', numArt: '122111134', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '44', min: '1', max: '54', cost: 22.00, quantity: 1 },
        { id: 2, upc: '750123456789', numArt: '132314541', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '85', min: '2', max: '65', cost: 22.00, quantity: 1 },
        { id: 3, upc: '750123456789', numArt: '231343241', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '73', min: '3', max: '67', cost: 22.00, quantity: 1 },
    ]);

    const headers = ['UPC', 'NumArt', 'SKU Prov', 'Descripcion', 'Proveedor', 'Departamento', 'Stock', 'Mínimo', 'Maximo', 'costo', 'Estado'];

    const handleGuardarExistencias = () => {
        // lógica de guardar para existencias
        console.log("Guardar existencias");
    };


    const handleGuardar = () => {
        if (!selectedSupplier) {
            alert("Por favor selecciona un proveedor.");
            return;
        }
        if (products.length === 0) {
            alert("Agrega al menos un producto.");
            return;
        }
        // Aquí agregar la lógica para guardar o enviar los datos
        alert("Orden guardada correctamente!");
    };


    return (
        <>
            <div>
                <HeaderContainer>
                    <TitleGlobal>🛒 Gestión de Compras y Proveedores</TitleGlobal>
                    <NavLinks>

                        <ModalComponent
                            name="Nuevo Articulo"
                            title="Nuevo Articulo"
                            show={isModalNuevoArticuloOpen}
                            onOpen={() => setIsModalNuevoArticuloOpen(true)}
                            onClose={() => setIsModalNuevoArticuloOpen(false)}
                            onClick={handleGuardarExistencias}
                        >
                            <FormGrid>
                                <FormField>
                                    <label htmlFor="upc">UPC</label>
                                    <input id="upc" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="descripcion">Descripción</label>
                                    <input id="descripcion" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="numArt">NumArt</label>
                                    <input id="numArt" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="tamano">Tamaño</label>
                                    <input id="tamano" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="departamento">Departamento</label>
                                    <input id="departamento" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="color">Color</label>
                                    <input id="color" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="stock">Stock</label>
                                    <input id="stock" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="minStock">Min Stock</label>
                                    <input id="minStock" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="maxStock">Max Stock</label>
                                    <input id="maxStock" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="empaque">Empaque</label>
                                    <input id="empaque" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="costo">Costo</label>
                                    <input id="costo" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>

                                <FormField>
                                    <label htmlFor="precio">Precio</label>
                                    <input id="precio" type="text" onChange={(e) => { /* handle */ }} />
                                </FormField>
                            </FormGrid>
                        </ModalComponent>
                    </NavLinks>
                </HeaderContainer>
            </div>

            <ContainerGlobal>
                <TableLine
                    headers={headers}
                    rows={[
                        ['750123456789', '122111134', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '44', '1', '1', '54', '$22.00', '🔴 Bajo stock'],
                        ['750123456789', '132314541', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '85', '2', '2', '65', '$22.00', '🟢 OK'],
                        ['750123456789', '231343241', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '73', '3', '3', '67', '$22.00', '🔴 Sin stock']
                    ]}
                />
                <br />

                <MainGrid>
                    {/* Panel Proveedores */}
                    <Panel>
                        <Title>Proveedores
                            <ModalComponent
                                name="Nuevo"
                                title="Nuevo Proveedor"
                                show={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                onClick={handleGuardar}
                                size="50%"
                                button={null} // Ya no necesitas el botón aquí
                            >
                                <h4>Aqui es nuevo</h4>
                            </ModalComponent>
                        </Title>
                        <SearchInput type="text" placeholder="Buscar proveedor..." />
                        <ListWrapper>
                            {filteredSuppliers.map(supplier => (
                                <>
                                    <ListItem key={supplier.idSuplier}>{supplier.name}</ListItem>
                                    <ModalComponent
                                        name="OC"
                                        title="Generar orden de compra"
                                        show={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                        onClick={handleGuardar}
                                        size="50%"
                                        button={null} // Ya no necesitas el botón aquí
                                    >
                                        <h4>Proveedor ID: {supplier.idSuplier}</h4>
                                        <p>Nombre: {supplier.name}</p>
                                    </ModalComponent>
                                </>
                            ))}
                        </ListWrapper>
                    </Panel>

                    {/* Panel Productos */}
                    <Panel>
                        <Title>Generar Informes</Title>
                        <ListWrapper>
                            <h3>📦 Informes de Inventario</h3>
                            <ListItem>Stock actual por producto</ListItem>
                            <ListItem>Productos con bajo stock</ListItem>
                            <ListItem>Productos sin movimiento</ListItem>
                            <ListItem>Historial de movimientos de inventario</ListItem>
                            <h3>🛒 Informes de Compras</h3>
                            <ListItem>Órdenes de compra (OC) emitidas</ListItem>
                            <ListItem>Órdenes de compra pendientes de recibir</ListItem>
                            <ListItem>Historial de compras por proveedor</ListItem>
                            <ListItem>Costo promedio por producto</ListItem>
                            <h3>📈 Informes de Análisis</h3>
                            <ListItem>Comparativo mensual de compras</ListItem>
                            <ListItem>Proveedores más utilizados</ListItem>
                            <ListItem>Tiempo promedio de entrega por proveedor</ListItem>
                            <ListItem>Proyecciones de compra</ListItem>

                            <ListItem>Productos por vencer (si aplica a perecederos).</ListItem>
                            <ListItem>OCs con más de X días sin recibir.</ListItem>
                            <ListItem>Cambios significativos en precios de proveedores.</ListItem>
                        </ListWrapper>
                    </Panel>

                    {/* Panel Órdenes */}
                    <Panel>
                        <Title>Órdenes de Compra Recientes</Title>
                        <TableLine
                            headers={['ID', 'Proveedor', 'Fecha', 'Estado']}
                            rows={[
                                [101, 1, "2025-07-01", "Pendiente"],
                                [102, 2, "2025-06-28", "Recibida"],
                            ]}
                        />
                    </Panel>
                </MainGrid>

            </ContainerGlobal>
        </>
    );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;



const MainGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 25px;
`;

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

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  max-height: 320px;
  overflow-y: auto;
`;
/* 
const ListItem = styled.li`
  padding: 8px 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`; */
const ListItem = styled.div`
  padding: 8px 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem 2rem;
  padding: 1rem 0;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;

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
    outline-offset: 2px;

    &:focus {
      border-color: #ea4c89; /* color rosa similar */
      box-shadow: 0 0 6px rgba(234, 76, 137, 0.4);
    }
  }
`;

const ListWrapper = styled.div`
  max-height: 320px;
  overflow-y: auto;
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