/*
* Styles Component Login
*/
import styled, { keyframes } from 'styled-components';

export const Main = styled.main`  
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const Section = styled.section`
  align-items: center;
  background-image: url('../../images/bg_blue.png') ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const Login = styled.div`  
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 26px 0 rgba(68, 73, 85, 0.2);
  display: flex;
  flex-flow: column;
  height: 350px;
  justify-content: center;
  width: 650px;

  @media only screen and ( max-width : 768px ) {
    
    height: auto;
    margin: 20px;
    padding: 20px 0;
    width: 100%;
  }
`;

export const Form = styled.form`  
  align-items: center; 
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media only screen and ( max-width : 768px ) {
    
    align-items: center;
    padding: 0 20px;
  }
`;

export const Input = styled.input`  
  border: 1px solid rgb(0, 59, 229);
  border-radius: 100px;
  color: rgba(0, 59, 229, 1);
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  margin-top: 40px;
  text-align: center;
  width: 400px;

  @media only screen and ( max-width : 768px ) {
    
    width: 100%;
  }
`;

export const Button = styled.button`  
  background: rgb(0, 59, 229);
  border: 1px solid rgb(0, 59, 229);
  border-radius: 100px;
  color: white;
  cursor: pointer;
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 700;
  height: 40px;
  letter-spacing: 0.03em;
  line-height: 14px;
  text-transform: uppercase;
  width: 400px;

  @media only screen and ( max-width : 768px ) {
    
    width: 100%;
  }
`;

export const Image = styled.img`  
  width: 185px;

  @media only screen and ( max-width : 240px ) {
    
    width: 80%;
  }
`;

/*
* Styles Login Loading
*/

export const Loading = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;  
`;

export const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  animation: ${Spin} 3s linear infinite;
  background-image: url('../images/spinner-login.png');
  height: 62px;
  margin: 0 auto;
  width: 62px;
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerText = styled.div`
  color: rgba(0, 59, 229, 1);
  font-family: Epilogue , sans-serif;
  font-size: 35px;
  font-weight: 400;
  line-height: 50px;
  margin-top: 20px;
  text-align: center;
`;
