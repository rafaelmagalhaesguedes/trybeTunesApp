import styled from 'styled-components';
import bgEditProfile from '../../images/bg_editProfile.png';

export const ContainerEditProfile = styled.section`
  background-color: rgb(239, 243, 249);
  height: auto;
  width: 100%;
`;

export const HeaderEditProfile = styled.header`
  background-image: url(${bgEditProfile}) ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  width: 100%;
`;

export const MainEditProfile = styled.main`
  background-color: rgb(239, 243, 249);
  display: flex;
  flex-flow: row nowrap;
  height: auto;
  justify-content: space-around;
  width: 100%;

  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-flow: column;
    width: 100%;
  }
`;

export const ImageUserProfile = styled.div`
  bottom: 50px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 35%;

  @media only screen and ( max-width : 768px ) {
    width: 100%;
  }
`;

export const ImageUser = styled.img`
  background-color: rgb(143, 188, 255);
  border: 1px solid silver;
  border-radius: 15rem;
  box-shadow: -9px 8px 8px 0 #0033;
  height: 15rem;
  width: 15rem;
`;

/* CSS component Loading Profile */
export const LoadingEditProfile = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;
`;
