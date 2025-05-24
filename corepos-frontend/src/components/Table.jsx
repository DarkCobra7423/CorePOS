import styled from 'styled-components';

const Table = ({ headers, rows, vertical }) => {
  return (
    <TableContainer>

      {vertical ? " " :
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead >
      }

      {vertical ?
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row" style={{ fontSize: '1rem', background: '#bbb' }}>
                    {cell}
                  </th>
                ) : (
                  <Td key={cellIndex}>{cell}</Td>
                )
              )}
            </Tr>
          ))}
        </Tbody>
        :
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      }
    </TableContainer >
  );
};

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  background-color: white;
  border: 1px solid #dee2e6;
`;

const Thead = styled.thead`
  background-color: #f8f9fa;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Th = styled.th`
  padding: 0.75rem;
  border: 1px solid #dee2e6;
  text-align: left;
  background-color: #f8f9fa;
`;

const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #dee2e6;
`;

export default Table;
