import styled from 'styled-components';

const ContainerGlobal = ({ children }) => {

    const Container = styled.div`
        margin: auto;
        margin-bottom: 25px;
        box-shadow: 1px 1px 2px 0 #CCCCCC;
        padding: 20px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        background: white !important;
        border-radius: 1rem;
    `;

    return (

        <Container>
            {children}
        </Container>

    );
}

export default ContainerGlobal;
