/** *****************************************
*
*    CSS Styles Component Header
*
********************************************* */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: space-between;
  width: 250px;

  @media only screen and ( max-width : 768px ) {
    display: none;
  }
`;

export const HeaderLogo = styled.img`
  height: 95px;
  margin: 33.59px 40px;
  width: 170px;
`;

export const NavbarHeader = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 54px;
  height: auto;
  text-decoration: none;
  margin: 0 40px;
  width: 100%;
`;

export const NavbarLink = styled(Link)`
    display: flex;
    gap: 30px;
    color: rgba(68, 73, 85, 1);
    font-family: Epilogue , sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.03em;
    line-height: 16px;
    text-align: left;
    text-decoration: none;
`;

export const NavbarIcon = styled(FontAwesomeIcon)`
  gap: 10px;
`;

export const NavbarUserInfo = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: first baseline;
  margin: 20px 40px;
`;

export const UserImage = styled.img`
  background-color: #d6d6d6;
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

export const UserName = styled.p`  
  color: rgba(68, 73, 85, 1);
  font-family: Epilogue , sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 16px;
`;
