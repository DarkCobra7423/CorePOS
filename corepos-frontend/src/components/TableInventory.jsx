import React from 'react';
import styled from 'styled-components';

const TableInventory = ({ tableTitle, content }) => {
    if (!Array.isArray(tableTitle)) {
        console.error('`tableTitle` debe ser un arreglo. Recibido:', tableTitle);
        return null;
    }

    return (
        <Container>
            <Table className="results">
                <thead style={{ background: '#b3b3b3' }}>
                    <tr>
                        {tableTitle.map((title, index) => (
                            <TableCell key={`header-${index}`}>{title}</TableCell>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {content.map((row, rowIndex) => (
                        <TableRow key={`row-${rowIndex}`}>
                            {tableTitle.map((col, colIndex) => (
                                <TableCell key={`cell-${rowIndex}-${colIndex}`}>
                                    {row[col] ?? '-'}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default TableInventory;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
