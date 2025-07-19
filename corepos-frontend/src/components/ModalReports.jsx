import React, { useState } from 'react';
import styled from 'styled-components';
/* import {
    Box,
    Button,
    Modal,
    Typography,
    List,
    ListItem,
} from '@mui/material'; */

const informes = [
    {
        categoria: '📦 Informes de Inventario',
        items: [
            'Stock actual por producto',
            'Productos con bajo stock',
            'Productos sin movimiento',
            'Historial de movimientos de inventario',
        ],
    },
    {
        categoria: '🛒 Informes de Compras',
        items: [
            'Órdenes de compra (OC) emitidas',
            'Órdenes de compra pendientes de recibir',
            'Historial de compras por proveedor',
            'Costo promedio por producto',
        ],
    },
    {
        categoria: '📈 Informes de Análisis',
        items: [
            'Comparativo mensual de compras',
            'Proveedores más utilizados',
            'Tiempo promedio de entrega por proveedor',
            'Proyecciones de compra',
            'Productos por vencer (si aplica a perecederos)',
            'OCs con más de X días sin recibir',
            'Cambios significativos en precios de proveedores',
        ],
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: 400,
};

const ModalReports = () => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpen = (item) => {
        setModalContent(item);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <ButtonModal>
                {informes.map((section, idx) => (
                    <Box key={idx}>
                        <Typography variant="h6" sx={{ mt: 2 }}>{section.categoria}</Typography>
                        {section.items.map((item, i) => (
                            <ListItem key={i} disablePadding>
                                <Button onClick={() => handleOpen(item)}>{item}</Button>
                            </ListItem>
                        ))}
                    </Box>
                ))}
            </ButtonModal>

            <ModalOverlay open={open} onClose={handleClose}>
                <ModalContainer sx={style}>
                    <Typography variant="h6" component="h2">{modalContent}</Typography>
                    <Typography sx={{ mt: 2 }}>
                        Aquí puedes mostrar una descripción, filtros o botones relacionados con este informe.
                    </Typography>
                </ModalContainer>
            </ModalOverlay>
        </>
    );
};


// Estilos para el modal y el fondo
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: ${({ size }) => (size ? size : '500px')};
  width: 100%;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-out;


  background-color: white;
  border-radius: 8px;
  max-width: ${({ size }) => (size ? size : '500px')};
  width: 100%;
  max-height: 80vh; /* limita la altura del modal */
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-out;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
`;

const ModalTitle = styled.h5`
  margin: 0;
  color: #333;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  color: #aaa;
  cursor: pointer;
  font-size: 3rem;

  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 20px 0;
  color: #555;

  padding: 20px 0;
  color: #555;
  max-height: 60vh; /* o el valor que prefieras */
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;


  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
`;

const Button = styled.a`

 /*  text-decoration: none;
  color: #007bff;
  //font-weight: 500;
  border: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  } */
  
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  color: white !important;
  text-decoration: none !important;

  &:hover {
    background-color: ${(props) =>
        props.primary ? '#0056b3' : '#5a6268'};
  } 
`;

const ButtonModal = styled.button`
  border: none;
  background: transparent;

  text-decoration: none;
  color: #007bff;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default ModalReports;