import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = ({ title, data, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer onClick={(e) => e.stopPropagation()}>
      <DropdownButton onClick={toggleDropdown}>
        {selected || title}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {data.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
                setSelected(item);
                onSelect(item);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

// Styled-components
const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 250px;
`;

const DropdownButton = styled.button`
    width: 100%;
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
/* 
// Estilos de los elementos del Dropdown
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 40%;
`;

const DropdownButton = styled.button`
  width: 100%;
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  min-width: 160px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 10px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`; */

export default Dropdown;