/** *****************************************
*
*    CSS Styles Page Login
*
********************************************* */
import styled, { keyframes } from 'styled-components';
import iconSpinner from '../../images/spinner-login.png';
import bgBlue from '../../images/bg_blue.png';

export const Main = styled.main`  
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const Section = styled.section`
  align-items: center;
  background-image: url(${bgBlue}) ,
  linear-gradient(135deg, rgb(0, 59, 229, 1),
  rgb(0, 213, 226, 1));
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
  border-radius: 1.25rem;
  box-shadow: 0 0 26px 0 rgba(68, 73, 85, 0.2);
  display: flex;
  flex-flow: column;
  height: 21.875rem;
  justify-content: center;
  width: 40.625rem;

  @media only screen and ( max-width : 768px ) {
    
    height: auto;
    margin: 1.25rem;
    padding: 1.25rem 0;
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
    padding: 0 1.25rem;
  }
`;

export const Input = styled.input`  
  border: 1px solid rgb(0, 59, 229);
  border-radius: 100px;
  color: rgba(0, 59, 229, 1);
  font-size: 0.875rem;
  font-weight: 400;
  height: 2.5rem;
  margin-top: 2.5rem;
  text-align: center;
  width: 25rem;

  @media only screen and ( max-width : 768px ) {
    
    width: 100%;
  }
`;

export const Button = styled.button`  
  background: rgb(0, 59, 229);
  border: 1px solid rgb(0, 59, 229);
  border-radius: 6.25rem;
  color: white;
  cursor: pointer;
  font-family: Epilogue , sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  height: 2.5rem;
  letter-spacing: 0.03em;
  line-height: 0.875rem;
  text-transform: uppercase;
  width: 25rem;

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

/** *****************************************
*
*    CSS Styles Loading
*
********************************************* */

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

export const Spinner = styled.span`
  animation: ${Spin} 3s linear infinite;
  background-image: url(${iconSpinner});
  height: 3.875rem;
  margin: 0 auto;
  width: 3.875rem;
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerText = styled.p`
  color: rgba(0, 59, 229, 1);
  font-family: Epilogue , sans-serif;
  font-size: 2.188rem;
  font-weight: 400;
  line-height: 3.125rem;
  margin-top: 1.25rem;
  text-align: center;
`;
