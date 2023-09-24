import styled from 'styled-components';
import bgError from '../../images/bg_erro.png';

export const NotFoundPage = styled.div`
  background-image: url(${bgError}) ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;
