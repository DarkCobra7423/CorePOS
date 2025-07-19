import React from 'react';
import styled from 'styled-components';
import TitleGlobal from './TitleGlobal';

const ModalComponent = ({ name, title, children, size, onClick, show, onClose, onOpen, button }) => {
  return (
    <div>
      {name && (
        <ButtonModal primary onClick={(e) => {
          e.preventDefault();
          if (onOpen) onOpen();
        }}>
          {name}
        </ButtonModal>
      )}

      {/* Modal */}
      <ModalOverlay $show={show}>
        <ModalContainer $size={size}>
          <ModalHeader>
            <ModalTitle><TitleGlobal>{title}</TitleGlobal></ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {button}
            <Button onClick={onClose}>Cerrar</Button>
            <Button onClick={onClick} $primary={true}>Guardar</Button>
          </ModalFooter>
        </ModalContainer>
      </ModalOverlay>
    </div>
  );
};

// Estilos
const ModalOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$show'
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$size'
})`
  background-color: white;
  border-radius: 8px;
  max-width: ${(props) => (props.$size ? props.$size : '500px')};
  width: 100%;
  max-height: 80vh;
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
  font-size: 3rem;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  //padding: 20px 0;
  color: #555;
  max-height: 60vh;
  overflow-y: auto;
`;

const ModalFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
`;

const Button = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== '$primary'
})`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.$primary ? '#007bff' : '#6c757d')};
  color: white !important;
  text-decoration: none !important;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#0056b3' : '#5a6268')};
  }
`;

const ButtonModal = styled.button`
  border: none;
  background: transparent;
  color: #007bff;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default ModalComponent;