// src/styles.tsx

import styled from 'styled-components';

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
