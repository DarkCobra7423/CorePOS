// src/components/Dashboard.js
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #ecf0f1;
`;

const Dashboard = () => (
    <DashboardContainer>
        <Content>
            <h1>Bienvenido al Dashboard</h1>
            {/* Aquí puedes agregar más contenido */}
        </Content>
    </DashboardContainer>
);

export default Dashboard;