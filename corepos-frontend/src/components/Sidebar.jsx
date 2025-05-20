import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebar } from '../components/SidebarContext';
import {
  faDashboard,
  faBarChart,
  faLineChart,
  faAreaChart,
  faWrench,
  faBoxes,
  faCashRegister,
} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../constants/Colors';

function Sidebar() {

  const { isOpen } = useSidebar();

  return (

    <SidebarContainer $isOpen={isOpen}>
      < SidebarNav >
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="/">
              <IconWrapper className="rad-bg-success">
                <FontAwesomeIcon icon={faDashboard} />
              </IconWrapper>
              <SidebarItemText $isOpen={isOpen}>Dashboard</SidebarItemText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="inventory">
              <IconWrapper className="rad-bg-danger">
                <FontAwesomeIcon icon={faBoxes} />
              </IconWrapper>
              <SidebarItemText $isOpen={isOpen}>Inventory</SidebarItemText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="#">
              <IconWrapper className="rad-bg-primary">
                <FontAwesomeIcon icon={faLineChart} />
              </IconWrapper>
              <SidebarItemText $isOpen={isOpen}>Call trends</SidebarItemText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="sales">
              <IconWrapper className="rad-bg-warning">
                <FontAwesomeIcon icon={faCashRegister} />
              </IconWrapper>
              <SidebarItemText $isOpen={isOpen}>Post</SidebarItemText>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="#">
              <IconWrapper className="rad-bg-violet">
                <FontAwesomeIcon icon={faWrench} />
              </IconWrapper>
              <SidebarItemText $isOpen={isOpen}>Settings</SidebarItemText>
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </SidebarNav >
    </SidebarContainer >
  );
}

const SidebarContainerBase = ({ isOpen, ...rest }) => <aside {...rest} />;

const SidebarContainer = styled(SidebarContainerBase)`
  background-color: transparent;
  height: calc(100vh - 70px);
  padding-top: 20px;
  position: fixed;
  top: 70px;
  left: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '70px')};
`;


const SidebarItemText = styled.span`
  margin-left: 12px;
  white-space: nowrap;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
  transition: opacity 0.2s ease;
`;

const SidebarNav = styled.nav`
  width: 100%;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  color: ${COLORS.cWhite};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2, 1); /* solo se expande horizontalmente */
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li:has(.rad-bg-success) {
    background-color: ${COLORS.cSucess};
  }

  li:has(.rad-bg-danger) {
    background-color: ${COLORS.cDanger};
  }

  li:has(.rad-bg-primary) {
    background-color: ${COLORS.cPrimary};
  }

  li:has(.rad-bg-warning) {
    background-color: ${COLORS.cWarning};
  }

  li:has(.rad-bg-violet) {
    background-color: ${COLORS.cViolet};
  }
  
`;

const SidebarItem = styled.li`
  //margin-bottom: 10px;
  
  &:hover {
    transform: scale(1.2, 1); /* solo se expande horizontalmente */
  }
`;

const SidebarLink = styled.a`
  color: ${COLORS.cWhite};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${COLORS.CHoverSideBar};
  }
`;

const IconWrapper = styled.div`
  //margin-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 16px;

  &.rad-bg-success {
    background-color: ${COLORS.cSucess};
  }

  &.rad-bg-danger {
    background-color: ${COLORS.cDanger};
  }

  &.rad-bg-primary {
    background-color: ${COLORS.cPrimary};
  }

  &.rad-bg-warning {
    background-color: ${COLORS.cWarning};
  }

  &.rad-bg-violet {
    background-color: ${COLORS.cViolet};
  }

  
`;

const SidebarText = styled.span`
  font-size: 16px;
`;

export default Sidebar;