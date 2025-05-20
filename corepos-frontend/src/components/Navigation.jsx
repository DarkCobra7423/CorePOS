import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { useSidebar } from '../components/SidebarContext'; // Asegúrate del path
import { COLORS } from '../constants/Colors';

function Navigation() {

  const { toggleSidebar } = useSidebar();

  return (
    <Nav>
      <SectionLeft>
        <Logo href="#" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </Logo>
      </SectionLeft>

      <SectionCenter>
        <HeaderTitle>RADAR</HeaderTitle>
      </SectionCenter>

      <SectionRight>
        <NavItem>

          <IconWithBadge>
            <FontAwesomeIcon icon={faBell} />
            <Badge>3</Badge>
          </IconWithBadge>

          <Dropdown>
            <li>🔔 Notificación 1</li>
            <li>🔔 Notificación 2</li>
          </Dropdown>
        </NavItem>

        <NavItem>

          <ProfileImg
            src="https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg"
            alt="Profile"
          />

          <Dropdown>
            <li>👤 My Profile</li>
            <li>🚪 Sign Out</li>
          </Dropdown>
        </NavItem>
      </SectionRight>
    </Nav>
  );
}


const Nav = styled.nav`
  height: 70px;
  background-color: ${COLORS.cWhite};
  color: ${COLORS.cBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 20px;
  position: relative;

  z-index: 1000; 
`;

const SectionLeft = styled.div`
  flex: 1;
`;

const SectionCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SectionRight = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Logo = styled.a`
  font-size: 22px;
  text-decoration: none;
  color: ${COLORS.cBlack};
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${COLORS.cWhite};
  color: ${COLORS.cBlack};
  list-style: none;
  padding: 10px 0;
  width: 250px;
  display: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  li {
    padding: 10px 15px;
    font-size: 14px;

    &:hover {
      background-color: ${COLORS.cGlobalBackgroundHover};
    }
  }
`;


const NavItem = styled.li`
  margin-left: 20px;
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const IconWithBadge = styled.div`
  position: relative;
  font-size: 20px;
`;

const Badge = styled.span`
  background: ${COLORS.cBadgeNotification};
  color: ${COLORS.cWhite};
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  position: absolute;
  top: -6px;
  right: -10px;
`;

export default Navigation;