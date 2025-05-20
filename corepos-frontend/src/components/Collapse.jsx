import React, { useState } from 'react';
import styled from 'styled-components';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="collapse-content"
      >
        <Title>{title}</Title>
        <Icon>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </Icon>
      </Header>

      <Content id="collapse-content" role="region" aria-hidden={!isOpen} $isOpen={isOpen}>
        {typeof content === 'string' ? <p>{content}</p> : content}
      </Content>
    </Container>
  );
};

export default Collapse;

// Styled Components
const Container = styled.div`
  margin-bottom: 1rem;
`;

const Header = styled.button`
  width: 100%;
  background: #f2f2f2;
  border: none;
  padding: 12px;
  //font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.span`
  text-align: left;
  font-size: 1.2rem;
`;

const Icon = styled.span`
  //font-size: 1rem;
`;

const Content = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  padding: 10px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-top: none;
`;
