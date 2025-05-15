import styled from "styled-components";

function Sales() {
    return (
        <FullScreenWrapper>
            <Container>
                <ContainerPromotion>
                    <AppliedDiscount>Usd. Ahorro</AppliedDiscount>
                    <Promotion>Castrol 2x$300 7.00</Promotion>
                </ContainerPromotion>
                <ContainerTotal>
                    <h2>Total:</h2>
                    <span><b><span style={{ fontSize: '50px' }}>$</span> 5,442.40</b></span>
                </ContainerTotal>
            </Container>

            <Item><span>Items:    12</span></Item>

            <ScrollArea>
                <ScrollableProductList>
                    <TableWrapper>
                        <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>
                                <tr>
                                    <td><span>###</span>75042347234732<span>#</span><br /> Castrol EDGE 5W-30 K 1L</td>
                                    <td>$350.00</td>
                                </tr>

                            </tbody>
                        </table>
                    </TableWrapper>

                    <Publicity>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8_dKab7CuKwLGHE0Iwx_Lf0rF8dzZvvIXg&s" alt="" style={{ width: '100%' }} />
                    </Publicity>
                </ScrollableProductList>
            </ScrollArea>

            <Container style={{ background: '#fff' }}>
                <ContainerSubtotal>
                    <p>TOTAL $ 5,442.40</p>
                    <h1>EFECTIVO *,***,***.**</h1>
                </ContainerSubtotal>
                <ContainerLogo>
                    <img src="https://cdn.worldvectorlogo.com/logos/castrol-4.svg" alt="" />
                </ContainerLogo>
            </Container>

        </FullScreenWrapper >
    );
}

const FullScreenWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
`;

const ScrollableProductList = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden; /* evita scroll en todo el div, solo permitimos en TableWrapper */
  gap: 1rem;
  min-height: 0; /* importante para que funcione el scroll interno */
`;

const Container = styled.div`
    border-radius: 1rem !important;
    background: #c9cbd8;
    display: flex;
    flex-wrap: wrap;

`;

const ContainerLogo = styled.div`
    width: 18%;
    height: 100%;
    margin-left: 10px;

    img{
        width: 100%;
        height: 100%;
    }
`;

const TableWrapper = styled.div`
  
  flex: 1;
  overflow-y: auto;
  min-height: 300px;
  min-height: 0; /* necesario para que respete el espacio */

  table {
    width: 100%;
    //border-collapse: collapse;

    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    }

  th, td {
    text-align: left;
    padding: 0.5rem;
    //border-bottom: 1px solid #c9cbd8;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #d4d6e3;
    //color: #fff;

    overflow: hidden;         /* NECESARIO */
    border-radius: 0 0 1rem 1rem; /* Solo las esquinas inferiores */
 
  }

  thead th {
    background-color: #d4d6e3; /* Necesario para ver el redondeo */
  }

  thead th:first-child {
    border-bottom-left-radius: 1rem;
  }

    thead th:last-child {
    border-bottom-right-radius: 1rem;
    }
  
`;

const ScrollArea = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  min-height: 0; /* Esto permite que se adapte */
`;

const ContainerPromotion = styled.div`
    flex:
    0 0 auto;
    width: 79%;
    font-weight: bold;

    border-radius: 1rem;
    border-top-width: 1px;
    border-top-style: solid;
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #8a8c9c;
`;

const ContainerTotal = styled.div`
    margin-bottom: 0px;
    margin-top: 0px;
    flex:
    0 0 auto;
    width: 20%;

    span{
        font-size: 4rem;
    }
`;

const AppliedDiscount = styled.h1`
    margin-left: 25px;
    margin-bottom: 10px;
`;

const Promotion = styled.span`
    margin-left: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: flex-end; /* Alinea el texto al fondo */
    font-weight: bold; /* Hace el texto en negritas */
    padding: 10px 0; /* Agrega un pequeño margen para que no esté pegado al borde */
    //background: #c9cbd8;
    border: 1px solid #8a8c9c;
    border-radius: 1rem;
    width: 79%;

    span{
        padding-left: 2%;
    }
`;

const Publicity = styled.div`
    width: 22%;
`;

const ContainerSubtotal = styled.div`
  width: 80%;
  border-radius: 1rem;
  border: 1px solid #8a8c9c;
  text-align: center;
  margin-top: 1rem;
  flex-shrink: 0;

  p{
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;


export default Sales;