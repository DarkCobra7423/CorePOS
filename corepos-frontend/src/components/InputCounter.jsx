import React from 'react';
import styled from 'styled-components';

const InputCounter = ({ value, onChange, min = 0, max = 100 }) => {
    const handleIncrement = () => {
        if (value < max) onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > min) onChange(value - 1);
    };

    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);

        // Solo actualizar si es un número válido dentro de los límites
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            onChange(newValue);
        }
    };

    const handleBlur = (e) => {
        let newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue)) newValue = min;
        if (newValue < min) newValue = min;
        if (newValue > max) newValue = max;
        onChange(newValue);
    };

    return (
        <NumBlock>
            <NumIn>
                <Button className={`minus ${value <= min ? 'dis' : ''}`} onClick={handleDecrement} />
                {/* <StyledInput type="text" readOnly value={value} /> */}
                <StyledInput
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <Button className="plus" onClick={handleIncrement} />
            </NumIn>
        </NumBlock>
    );
};

const NumBlock = styled.div`
  display: inline-block;
`;

const NumIn = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  height: 40px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.span`
  width: 40%;
  height: 40px;
  position: relative;
  cursor: pointer;

  &.dis {
    pointer-events: none;
    opacity: 0.3;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #667780;
    height: 2px;
    width: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.plus::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  //width: 20%;
  height: 40px;
  border: none;
  text-align: center;
  background: transparent;
  font-size: 16px;
`;

export default InputCounter;