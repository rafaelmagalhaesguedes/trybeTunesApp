import styled from 'styled-components';
import bgProfile from '../../images/bg_profile.png';

/* CSS Page Profile */
export const ContainerProfile = styled.section`
  background-color: rgb(239, 243, 249);
  height: auto;
  width: 100%;
`;

export const HeaderProfile = styled.div`
  background-image: url(${bgProfile}) ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  width: 100%;
`;

export const LoadingProfile = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;
`;

/* CSS Component UserProfile */
export const SectionProfile = styled.section`
  display: flex;
  flex-direction: row;
  
  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-direction: column;
  }
`;

export const UserImageProfile = styled.div`
  bottom: 100px;
  display: flex;
  margin-left: 70px;
  position: relative;
  width: 30%;
  
  .imageUser {
    background-color: rgb(143, 188, 255);
    border: 1px solid silver;
    border-radius: 240px;
    box-shadow: -9px 8px 8px 0 #0033;
    height: 240px;
    width: 240px;
  }

  @media only screen and ( max-width : 768px ) {
    bottom: 60px;
    position: relative;
  }
`;

export const UserDataProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 30px;
  width: 70%;

  label {
    color: rgb(61, 73, 92);
    font-family: Epilogue , sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;  
  }

  .data {
    color: rgb(61, 73, 92);
    font-family: Epilogue , sans-serif;
    font-size: 16px;
    line-height: 24px;
  }
  
  .button-edit-profile {
    background-color: rgb(0, 59, 229);
    border-radius: 100px;
    color: white;
    font-family: Epilogue , sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 50px;
    width: 152px;
  }

  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 0 0 50px;
    width: 100%;
  }
`;
