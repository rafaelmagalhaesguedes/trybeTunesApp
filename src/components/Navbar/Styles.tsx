/** *****************************************
*
*    CSS Styles Component Navbar Responsive
*
********************************************* */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarResponsive = styled.nav`
  display: none;
  
  @media only screen and ( max-width : 768px ) {
    color: white;
    display: block;
    padding: 10px 0;
    position: absolute;
    width: 100%;
  }
`;

export const NavbarContainer = styled.div`
  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  }
`;

export const NavbarLogo = styled.div`
  @media only screen and ( max-width : 768px ) {
    display: flex;
    justify-content: center;
    width: 80%;
  }
`;

export const Logo = styled.img`
  @media only screen and ( max-width : 768px ) {
    width: 100px;
  }
`;

export const Bar = styled.div`
  background-color: white;
  height: 5px;
  margin: 3px 0;
  transition: 0.4s;
  width: 25px;
`;

export const MenuToggleButton = styled.button`
  display: none;
  
  @media only screen and ( max-width : 768px ) {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 1000;

    &.active ${Bar}:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    &.active ${Bar}:nth-child(2) {
      opacity: 0;
    }

    &.active ${Bar}:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }

    &.active {
      ${Bar}:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      ${Bar}:nth-child(2) {
        opacity: 0;
      }

      ${Bar}:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
`;

export const NavbarLinks = styled.div`
  display: none;

  @media only screen and ( max-width : 768px ) {
    background-color: #006494;
    color: white;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    left: 0%;
    padding: 0 40px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
    
    &.active {
      display: flex;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
`;

export const UserInfos = styled.div`
  @media only screen and ( max-width : 768px ) {
  
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const UserImage = styled.img`
  border-radius: 100%;
  width: 40%;
`;

export const Username = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 60%;
`;
