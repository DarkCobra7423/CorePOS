import React, { useState } from 'react';
import styled from 'styled-components';
import TitleGlobal from './TitleGlobal';



const ModalComponent = ({ name, title, children, size, onClick, show, onClose, onOpen, button }) => {
  return (
    <div>
      {/* Botón que dispara el modal */}
      <ButtonModal primary onClick={(e) => {
        e.preventDefault();
        if (onOpen) onOpen(); // desde el padre
      }}>
        {name}
      </ButtonModal>

      {/* Modal */}
      <ModalOverlay show={show}>
        <ModalContainer size={size}>
          <ModalHeader>
            <ModalTitle><TitleGlobal>{title}</TitleGlobal></ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {button}
            <Button onClick={onClose}>Cerrar</Button>
            <Button onClick={onClick} primary>Guardar</Button>
          </ModalFooter>
        </ModalContainer>
      </ModalOverlay>
    </div>
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

export default ModalComponent;