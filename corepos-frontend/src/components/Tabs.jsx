import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div style={styles.tabHeader}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        style={index === activeTab ? styles.activeTab : styles.tab}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div style={styles.tabContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

const styles = {
    tabHeader: {
        display: 'flex',
        borderBottom: '1px solid #ccc',
    },
    tab: {
        padding: '10px 20px',
        cursor: 'pointer',
        background: '#f0f0f0',
        border: 'none',
        borderBottom: '2px solid transparent',
    },
    activeTab: {
        padding: '10px 20px',
        cursor: 'pointer',
        background: '#fff',
        border: 'none',
        borderBottom: '2px solid #007bff',
        fontWeight: 'bold',
    },
    tabContent: {
        padding: '20px',
        //background: '#fff',
    },
};

export default Tabs;

{/* <div style={{margin: 'auto' }}>
    <TitleGlobal>Generar orden de compra</TitleGlobal>
    <Tabs tabs={tabData} />

</div>


const tabData = [
    {
        label: 'Proveedor',
        content:
            <ContainerGlobal>
                <Dropdown />
                Name:
                email:
                phone:
                addres.
                street:
                city:
                state:
                isActive:
            </ContainerGlobal>,
    },
    {
        label: 'Articulos',
        content: <div><ContainerGlobal>Aquí se listan los productos.</ContainerGlobal></div>,
    },
    {
        label: 'Entrega',
        content: <div><ContainerGlobal>Aquí se listan los productos.</ContainerGlobal></div>,
    },
    {
        label: 'Forma de Pago',
        content: <div><ContainerGlobal>Aquí se listan los productos.</ContainerGlobal></div>,
    },
    {
        label: 'Concluir y Enviar',
        content: <div><ContainerGlobal>Aq</ContainerGlobal></div>,
    },
];
 */}