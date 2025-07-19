import React from 'react';
import styled from 'styled-components';

export default function InventorySearch({ search, setSearch }) {
    return (
        <Header>
            <Title>Info. de Articulo</Title>
            <InputContainer>
                <div className="group">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                        </g>
                    </svg>
                    <input
                        placeholder="Search Item"
                        type="search"
                        className="input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </InputContainer>
        </Header>
    );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #111827;
`;

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
    background-color: #f3f3f4;
    transition: .3s ease;
  }

  .input:focus {
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
  }
`;