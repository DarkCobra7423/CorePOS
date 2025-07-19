import React from 'react';
import styled from 'styled-components';

const TableLine = ({ headers, rows, size }) => {

  return (
    <Section>
      <Container $size={size}>
        <Table>
          <Thead>
            <tr>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </tr>
          </Thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Td key={cellIndex}>{cell}</Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  max-height: 389px;
  width: 100%;
  overflow-y: auto;
`;

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$size'
})`
  max-height: ${(props) => (props.$size ? props.$size : '100%')}; 
  overflow-y: auto; 
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Thead = styled.thead``;

const Tr = styled.tr`
&:hover {
    background-color: #f1f1f1;
  }
`;

const Th = styled.th`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;

  @media (max-width: 768px) {
    padding: 5px 0;

    &::before {
      content: attr(data-label);
      font-weight: bold;
      display: inline-block;
      width: 100px;
    }
  }
`;

export default TableLine;