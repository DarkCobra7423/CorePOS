import React, { useState } from 'react';
import styled from 'styled-components';
import TitleGlobal from '../components/TitleGlobal';

const Stepper = ({ steps, data }) => {
    const [step, setStep] = useState(1);

    /* const steps = [
        'Step 1: Información Personal',
        'Step 2: Dirección de Envío',
        'Step 3: Revisión de Pedido',
        'Step 4: Confirmación',
    ]; */

    const nextStep = () => {
        if (step < steps.length) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div>
            <StepContainer>
                {steps.map((_, index) => (
                    <Step key={index} active={step === index + 1} onClick={() => setStep(index + 1)}>
                        {index + 1}
                    </Step>
                ))}
            </StepContainer>

            <StepLabel style={{ fontSize: '1.5rem' }}>{steps[step - 1]}</StepLabel>

            <StepContent>
                <div>
                    {/* <TitleGlobal>{steps[step - 1]}</TitleGlobal> */}
                    {data[step - 1].content}
                </div>
            </StepContent>

            <ContainerButton>
                <Button onClick={prevStep} disabled={step === 1}>
                    Anterior
                </Button>
                <Button onClick={nextStep} disabled={step === steps.length}>
                    Siguiente
                </Button>
            </ContainerButton>
        </div>
    );
};

// Estilos para los componentes
const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 600px;
  margin: auto;
`;

const Step = styled.div`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#4CAF50' : '#f1f1f1')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const StepLabel = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

const StepContent = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem;
  
  &:disabled {
    background-color: #ccc;
  }
`;

const ContainerButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: 4rem;
`;

export default Stepper;