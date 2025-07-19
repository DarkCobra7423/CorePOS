import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function AriastormLogo({ width }) {
    return (
        <div style={{ width: width || '100%' }}>
            <SVG
                width="320"
                height="100"
                viewBox="0 0 320 100"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Logo Ariastorm Technologies - Propuesta 3 animada"
            >
                <g transform="translate(20,10)">
                    <SymbolBlue points="10,80 35,10 60,80 45,80 55,50 40,50 50,20 30,70" />
                    <SymbolOrange points="42,50 48,30 55,30 45,70 40,70" />
                </g>
                <TextLogo x="100" y="50">Ariastorm</TextLogo>
                <TextSubtitle x="100" y="78">Technologies</TextSubtitle>
            </SVG>
        </div>
    );
}

const SVG = styled.svg`
  font-family: 'Orbitron', sans-serif;
`;

const fadeInMove = keyframes`
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const dashDraw = keyframes`
  to {
    stroke-dashoffset: 0;
    fill: #FF6F00;
    stroke: none;
  }
`;

const slideInText = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const SymbolBlue = styled.polygon`
  fill: #0A1F44;
  opacity: 0;
  transform: translateY(-10px);
  animation: ${fadeInMove} 1s forwards;
  animation-delay: 0.5s;
`;

const SymbolOrange = styled.polygon`
  fill: none;
  stroke: #FF6F00;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: ${dashDraw} 1.2s forwards;
  animation-delay: 1.5s;
`;

const TextLogo = styled.text`
  font-size: 40px;
  font-weight: 700;
  fill: #0A1F44;
  opacity: 0;
  animation: ${slideInText} 1s forwards;
  animation-delay: 1s;
`;

const TextSubtitle = styled.text`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  fill: #A0A0A0;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 2.2s;
`;