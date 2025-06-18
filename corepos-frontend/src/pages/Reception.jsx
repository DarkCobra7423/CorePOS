import { useState } from "react";
import Table from "../components/Table";
//import ContainerGlobal from "../components/ContainerGlobal";
import ModalComponent from '../components/ModalComponent';
import styled from "styled-components";
import InputCounter from "../components/InputCounter";

export default function Reception() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalFinishOpen, setIsModalFinishOpen] = useState(false);


    const [products, setProducts] = useState([
        { id: '1', upc: '750123456789', sku: '44244232', description: 'Castrol EDGE 0W-20', quantity: 1, cost: 22.00 },
        { id: '2', upc: '750123456788', sku: '44244232', description: 'Mobil 1 5W-30', quantity: 1, cost: 23.50 },
        { id: '3', upc: '750123456787', sku: '44244232', description: 'Valvoline 10W-40', quantity: 1, cost: 20.00 }
    ]);


    const handleQuantityChange = (index, qty) => {
        const updated = [...products];
        updated[index].quantity = qty;
        setProducts(updated);
    };


    const save = () => {
        // lógica de guardar para existencias
        console.log("save");
    };

    return (
        <>
            <h1>Recibiendo Factura #FAC-6231-3123</h1>

            <ContainerGlobal>
                <ContainerLetf>
                    <Table
                        headers={["UPC", "SKU", "Description", "Cantidad", "Costo"]}
                        rows={products.map((product, index) => [
                            product.upc,
                            product.sku,
                            product.description,
                            <InputCounter
                                key={product.id}
                                value={product.quantity}
                                onChange={(qty) => handleQuantityChange(index, qty)}
                                min={1}
                                max={1000}
                            />,
                            `$${product.cost.toFixed(2)}`
                        ])}
                        onRowClick={(row) => console.log("Row clicked:", row)}
                        vertical={false}
                    />
                </ContainerLetf>

                <ContainerRight>

                    <input type="text" value="750382132189" />
                    <h2>Ardilla Asada </h2>
                    <p>Empaque: 24</p>
                    <p>Costo: $12.00</p>

                    <InputCounter
                        //key={product.id}
                        value="1"
                        //onChange={(qty) => handleQuantityChange(index, qty)}
                        min={1}
                        max={1000}
                    />


                    <ModalComponent
                        name="Finalizar"
                        title="¿Finalizar la recepcion de #FAC-6231-3123?"
                        show={isModalOpen}
                        onOpen={() => setIsModalOpen(true)}
                        onClose={() => setIsModalOpen(false)}
                        onClick={save}
                    //size="80%"
                    //button={<button>Exportar</button>}
                    >
                        <h3>Proveedora Montecristo</h3>
                        <p>Costo Factura</p>
                        <p>$1,500.00</p>
                        <p>IVA: $212.00</p>
                        <p>IEPS: $312.00</p>
                        <p>Item Factura: 15</p>
                        <p>Item Recibido: 14</p>
                        <p>Costo Total: $2,024.00</p>
                    </ModalComponent>



                </ContainerRight>
            </ContainerGlobal>


        </>
    );
}

const ContainerLetf = styled.div`
    width: 70%;
    padding: 20px;
    overflow-y: auto;
`;
const ContainerRight = styled.div`
    width: 30%;
    padding: 20px;
    background-color: #f8f9fa;
    border-left: 1px solid #dee2e6;
    overflow-y: auto;

    h3 {
        margin-bottom: 10px;
    }

    p {
        margin: 5px 0;
    }
`;

const ContainerGlobal = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - 100px);
    overflow: hidden;

    margin: auto;
        margin-bottom: 25px;
        box-shadow: 1px 1px 2px 0 #CCCCCC;
        padding: 20px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        background: white !important;
        border-radius: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;