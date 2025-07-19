import React, { useState } from 'react';
import styled from 'styled-components';
import ContainerGlobal from '../../components/ContainerGlobal';
import ModalComponent from '../../components/ModalComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function InventoryDetails({ item }) {
    const toggleDropdown = () => setOpen(!open);
    const [open, setOpen] = useState(false);

    return (
        <>
            <ContainerGlobal>
                {item && (
                    <TitleRow>
                        <Title style={{ margin: '0', textTransform: 'uppercase' }}>{item.name}</Title>
                        <Price>
                            $ {item.price}
                            <DropdownContainer>
                                <DropdownButton onClick={toggleDropdown}>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </DropdownButton>

                                {open && (
                                    <DropdownContent>
                                        <DropdownItem>{item.name}</DropdownItem>
                                        <DropdownItem>Precio Anterior: $ {item.previousPrice}</DropdownItem>
                                        <DropdownItem>Margen: {item.margin} %</DropdownItem>
                                        <DropdownItem>Min Stock: {item.minStock}</DropdownItem>
                                        <DropdownItem>Max Stock: {item.maxStock}</DropdownItem>
                                    </DropdownContent>
                                )}
                            </DropdownContainer>
                        </Price>
                    </TitleRow>
                )}

                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>UPC</td>
                            <td>{item.upc}</td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Num Art</td>
                            <td>{item.itemNumber}</td>
                            <td>Depto</td>
                            <td>{item.department}</td>
                        </tr>
                        <tr>
                            <td>Tamaño</td>
                            <td>{item.size}</td>
                            <td>Color</td>
                            <td>{item.color}</td>
                        </tr>
                    </tbody>
                </table>
            </ContainerGlobal>
        </>
    );
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px 5px;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #263fcf;
  //padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* &:after {
    content: " ▼";
    font-size: 0.7rem;
  } */
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;

  font-size: 11px;
  font-weight: normal;
  padding: 10px 14px;
  //transform: translateX(-87%);
  right: 0;
  left: auto;

`;

const DropdownItem = styled.a`
  display: block;
  //padding: 10px 14px;
  color: #333;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  //margin: 0%;;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #111827;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #1f2937;
`;
