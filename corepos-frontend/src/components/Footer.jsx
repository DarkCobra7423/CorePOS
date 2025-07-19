import React from 'react';
import styled from 'styled-components';
import AriastormLogo from './AriastormLogo';

export default function Footer() {
    return (
        <FooterMain>
            <FooterContainer>
                <FooterLeft>
                    <AriastormLogo
                    //width={"30%"}
                    />
                    <AppInfo>
                        <strong>CorePOS</strong> <Version>v1.0.0</Version>
                        <Status><StatusDot /> Conectado</Status>
                    </AppInfo>
                </FooterLeft>

                <FooterCenter>
                    <a href="#">Soporte</a>
                    <a href="#">Ayuda</a>
                    <a href="#">Términos</a>
                    <a href="#">Privacidad</a>
                </FooterCenter>

                <FooterRight>
                    &copy; 2025 AriaStorm Technologies. Todos los derechos reservados.
                </FooterRight>
            </FooterContainer>
        </FooterMain>
    );
}

const FooterMain = styled.footer`
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 16px 24px;
  font-family: 'Inter', sans-serif;
  color: #333;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  
  @media(max-width: 768px) {   
    flex-direction: column;
    align-items: flex - start;
    gap: 12px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Version = styled.span`
  font-size: 0.85rem;
  color: #888;
  margin-left: 4px;
`;

const Status = styled.div`
  font-size: 0.8rem;
  color: #28a745;
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #28a745;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
`;

const FooterCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  a {
    text-decoration: none;
    color: #555;
    font-size: 0.9rem;

    &:hover {
      color: #000;
    }
  }
`;

const FooterRight = styled.div`
  font-size: 0.85rem;
  color: #777;
  text-align: right;

  @media(max-width: 768px) {   
    text-align: left;
    width: 100%;
  }
`;

/* @media(max - width: 768px) {
    const FooterContainer = styled.div`
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  `;

    const FooterRight = styled.div`
    text-align: left;
    width: 100%;
  `;
} */