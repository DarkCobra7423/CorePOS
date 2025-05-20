import React, { useState } from 'react';
import styled from 'styled-components';



const ModalComponent = ({ name, title, content }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* Botón que dispara el modal */}
            <Button primary onClick={handleShow}>
                {name}
            </Button>

            {/* Modal */}
            <ModalOverlay show={show}>
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <CloseButton onClick={handleClose}>&times;</CloseButton>
                    </ModalHeader>
                    <ModalBody>
                        {content}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleClose}>Close</Button>
                        <Button primary>Save changes</Button>
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
  max-width: 500px;
  width: 100%;
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
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 20px 0;
  color: #555;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  color: white;

  &:hover {
    background-color: ${(props) =>
        props.primary ? '#0056b3' : '#5a6268'};
  }
`;

export default ModalComponent;