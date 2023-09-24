import styled from 'styled-components';

/*
  CSS Page Profile Edit
 */
export const ContainerEditProfile = styled.section`
  background-color: rgb(239, 243, 249);
  height: auto;
  width: 100%;
`;

export const HeaderEditProfile = styled.header`
  background-image: url('../../images/bg_editProfile.png') ,
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

export const LoadingEditProfile = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;
`;

/*
  CSS Page Profile
 */
