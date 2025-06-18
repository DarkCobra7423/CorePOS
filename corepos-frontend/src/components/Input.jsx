import React from 'react';
import styled from 'styled-components';

const Input = ({ type, title, size }) => {
  return (
    <StyledWrapper style={{ width: size }} >
      <div className="inputContainer">
        <input required className="customInput" type={type} />
        <label className="inputLabel">{title}</label>
        <div className="inputUnderline" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
margin-top: 3%;
width: 90%;

  .inputContainer {
    position: relative;
    margin-bottom: 20px;
  }

  .customInput {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #007bff;
    outline: none;
    transition: border-color 0.3s ease;
    color: #007bff;
  }

  .customInput:focus,
  .customInput:not(:placeholder-shown) {
    border-color: #0056b3;
  }

  .inputLabel {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    padding: 5px;
    font-size: 16px;
    color: #007bff;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .customInput:focus + .inputLabel,
  .customInput:not(:placeholder-shown) + .inputLabel {
    transform: translateY(-100%) translateX(-5px) scale(0.8);
  }

  .inputUnderline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007bff;
  }`;

export default Input;
