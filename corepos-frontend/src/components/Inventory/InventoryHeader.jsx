import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function InventoryHeader({ item, open, toggleDropdown, search, setSearch }) {
    return (
        <HeaderContainer>
            <HeaderTitle>Info. de Articulo</HeaderTitle>
            <InputContainer>
                <div className="group">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" /></g></svg>
                    <input
                        placeholder="Search Item"
                        type="search"
                        className="input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </InputContainer>

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
        </HeaderContainer>
    );
}

// Aquí puedes exportar los styled-components si aún no los tienes globales.
const HeaderContainer = styled.div` /* ... */ `;
const HeaderTitle = styled.h2` /* ... */ `;

const InputContainer = styled.div`
  width: 35%;

  .group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   max-width: 100%;
  }

  .input {
   width: 100%;
   height: 40px;
   line-height: 28px;
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

  .input:focus, input:hover {
   outline: none;
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
  }`;

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