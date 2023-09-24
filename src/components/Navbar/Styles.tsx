import styled from 'styled-components';

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

    .bar {
      background-color: white;
      height: 5px;
      margin: 3px 0;
      transition: 0.4s;
      width: 25px;
    }

    &.active .bar:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    &.active .bar:nth-child(2) {
      opacity: 0;
    }

    &.active .bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }

    &.active {
      .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      .bar:nth-child(2) {
        opacity: 0;
      }

      .bar:nth-child(3) {
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

    a {
      color: white;
      font-size: 1.3rem;
      text-decoration: none;
    }

    .link {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
`;

export const UserInfos = styled.div`
  @media only screen and ( max-width : 768px ) {
    
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  
    .image-user {
      width: 100px;
    }
  
    .user-name {
      color: white;
      font-size: 1.3rem;
    }
  }
`;
