import React, { useState } from 'react';
import Tabs from "../components/Tabs";
import ContainerGlobal from "../components/ContainerGlobal";
import Table from "../components/Table";
import TitleGlobal from "../components/TitleGlobal";
import Dropdown from "../components/Dropdown";
import Stepper from "../components/Stepper";
import { styled } from 'styled-components';
import ModalComponent from '../components/ModalComponent';
import InputCounter from '../components/InputCounter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Shopping() {

    const [search, setSearch] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [deliveryData, setDeliveryData] = useState({
        date: '',
        address: '',
        recipient: '',
        notes: ''
    });

    const [paymentData, setPaymentData] = useState({
        method: '',
        term: '',
        notes: ''
    });

    const [products, setProducts] = useState([
        { id: 1, upc: '750123456789', numArt: '122111134', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '44', min: '1', max: '54', cost: 22.00, quantity: 1 },
        { id: 2, upc: '750123456789', numArt: '132314541', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '85', min: '2', max: '65', cost: 22.00, quantity: 1 },
        { id: 3, upc: '750123456789', numArt: '231343241', sku: '122111134', description: 'Castrol EDGE 0W-20', current: '73', min: '3', max: '67', cost: 22.00, quantity: 1 },
    ]);

    const headers = ['UPC', 'NumArt', 'SKU Prov', 'Descripcion', 'Proveedor', 'Departamento', 'Stock Actual', 'Mínimo', 'Maximo', 'costo', 'Estado'];

    const headers2 = ['UPC', 'NumArt', 'SKU Prov', 'Descripcion', 'Actual', 'Mín', 'Max', 'costo', 'Subtotal', 'Solicitado', ' '];

    const headers1 = [' ', ' '];

    const dataSupplier = [
        'Distribuidora El Sol',
        'Proveedora del Norte',
        'Comercializadora Central',
        'Suministros y Servicios MX',
        'Grupo Abastecedor Total',
        'Distribuciones Rivera',
        'Importaciones La Bodega',
        'Almacenes del Centro',
        'Corporativo Surtimax',
        'Abastos Universales'
    ];

    const rows1 = selectedSupplier
        ? [
            ['Nombre Proveedor: ', selectedSupplier],
            ['Correo Electronico: ', 'correo@ejemplo.com'],
            ['Telefono: ', '00000000'],
            ['Direccion: ', 'Dirección de prueba'],
            ['Status: ', 'Activo'],
        ]
        : [];

    const handleSelect = (item) => {
        setSelectedSupplier(item);
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updated = [...products];
        updated[index].quantity = newQuantity;
        setProducts(updated);
    };

    const handleRemoveProduct = (index) => {
        const updated = products.filter((_, i) => i !== index);
        setProducts(updated);
    };

    const handleDeliveryChange = (field, value) => {
        setDeliveryData(prev => ({ ...prev, [field]: value }));
    };

    const handlePaymentChange = (field, value) => {
        setPaymentData(prev => ({ ...prev, [field]: value }));
    };

    const calcularTotal = () => {
        return products.reduce((sum, p) => sum + p.cost * p.quantity, 0).toFixed(2);
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
                    <TitleGlobal>Artículos con stock mínimos</TitleGlobal>
                    <NavLinks>
                        <ModalComponent
                            name="Órdenes de compra"
                            title='Órdenes de compra'
                            href='ordersc'
                        />
                        <ModalComponent
                            name="Proveedores"
                            title='Proveedores'
                            href='suppliers'
                        />
                        <ModalComponent
                            name="Informe de existencias"
                            title='Informe de existencias'
                            href='stocksreports'
                        />
                    </NavLinks>
                </HeaderContainer>
            </div>

            <ContainerGlobal>
                <Table
                    headers={headers}
                    rows={[
                        ['750123456789', '122111134', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '44', '1', '1', '54', '$22.00', '🔴 Bajo stock'],
                        ['750123456789', '132314541', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '85', '2', '2', '65', '$22.00', '🟢 OK'],
                        ['750123456789', '231343241', '122111134', 'Castrol EDGE 0W-20', 'Preveedora', '73', '3', '3', '67', '$22.00', '🔴 Sin stock']
                    ]}
                    vertical={false}
                />

                <NavLinks style={{ display: 'block' }}>
                    <ModalComponent
                        name="Generar orden de compra"
                        title="Generar orden de compra"
                        show={isModalOpen}
                        onOpen={() => setIsModalOpen(true)}
                        onClose={() => setIsModalOpen(false)}
                        onClick={handleGuardar}
                        size="80%"
                        button={<button>Imprimir</button>}
                    >
                        <ContainerDiv className="group" style={{ textAlign: 'center' }}>
                            <Dropdown
                                title="Selecciona un proveedor"
                                data={dataSupplier}
                                onSelect={handleSelect}
                            />
                            <InputContainer>
                                <div className="group">
                                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                        </g>
                                    </svg>
                                    <input
                                        placeholder="Id Proveedores"
                                        type="search"
                                        className="input"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </InputContainer>
                        </ContainerDiv>

                        <br />
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <Table
                                headers={headers1}
                                rows={rows1}
                                vertical={true}
                            />
                        </div>

                        <InputContainer>
                            <div className="group">
                                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                    </g>
                                </svg>
                                <input
                                    placeholder="UPC / Num. Article"
                                    type="search"
                                    className="input"
                                // Aquí podrías agregar funcionalidad para buscar productos
                                />
                            </div>
                        </InputContainer>

                        <Table
                            headers={headers2}
                            rows={products.map((product, index) => [
                                product.upc,
                                product.numArt,
                                product.sku,
                                product.description,
                                product.current,
                                product.min,
                                product.max,
                                `$${product.cost.toFixed(2)}`,
                                `$${(product.cost * product.quantity).toFixed(2)}`,
                                <InputCounter
                                    key={product.id}
                                    value={product.quantity}
                                    onChange={(qty) => handleQuantityChange(index, qty)}
                                    min={1}
                                    max={1000}
                                />,
                                <a href='#' onClick={(e) => { e.preventDefault(); handleRemoveProduct(index); }}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </a>
                            ])}
                        />

                        <br />
                        <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
                            Total: ${calcularTotal()}
                        </div>

                        <br />
                        <div style={{ marginTop: '20px' }}>
                            <fieldset style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
                                <legend><strong>Datos de entrega</strong></legend>
                                <label>
                                    Fecha de entrega<br />
                                    <input
                                        type="date"
                                        value={deliveryData.date}
                                        onChange={e => handleDeliveryChange('date', e.target.value)}
                                    />
                                </label>
                                <br /><br />
                                <label>
                                    Dirección de entrega<br />
                                    <input
                                        type="text"
                                        value={deliveryData.address}
                                        onChange={e => handleDeliveryChange('address', e.target.value)}
                                    />
                                </label>
                                <br /><br />
                                <label>
                                    Recibe<br />
                                    <input
                                        type="text"
                                        value={deliveryData.recipient}
                                        onChange={e => handleDeliveryChange('recipient', e.target.value)}
                                    />
                                </label>
                                <br /><br />
                                <label>
                                    Notas<br />
                                    <textarea
                                        value={deliveryData.notes}
                                        onChange={e => handleDeliveryChange('notes', e.target.value)}
                                        rows={3}
                                        style={{ width: '100%' }}
                                    />
                                </label>
                            </fieldset>

                            <fieldset style={{ padding: '1rem', border: '1px solid #ccc' }}>
                                <legend><strong>Datos de pago</strong></legend>
                                <label>
                                    Método de pago<br />
                                    <input
                                        type="text"
                                        value={paymentData.method}
                                        onChange={e => handlePaymentChange('method', e.target.value)}
                                    />
                                </label>
                                <br /><br />
                                <label>
                                    Plazo<br />
                                    <input
                                        type="text"
                                        value={paymentData.term}
                                        onChange={e => handlePaymentChange('term', e.target.value)}
                                    />
                                </label>
                                <br /><br />
                                <label>
                                    Notas<br />
                                    <textarea
                                        value={paymentData.notes}
                                        onChange={e => handlePaymentChange('notes', e.target.value)}
                                        rows={3}
                                        style={{ width: '100%' }}
                                    />
                                </label>
                            </fieldset>
                        </div>

                    </ModalComponent>
                </NavLinks>
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

const CenteredDiv = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Input = styled.input`
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 100%;
  margin: auto;
  margin-left: 8rem;
`;

const ContainerDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  .group {
    position: relative;
    display: flex;
    align-items: center;
    width: 30%;
  }

  .input {
    width: 100%;
    height: 40px;
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

  .input:focus,
  .input:hover {
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
  }
`;