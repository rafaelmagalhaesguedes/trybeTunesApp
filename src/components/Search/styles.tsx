/*
* Styles Component Search
*/
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ErrorMessageContainerProps = {
  resultState: boolean | undefined;
};

export const SectionSearch = styled.section`
  height: 80vh;
  width: 100%;

  @media only screen and ( max-width: 768px ) {
    height: auto;
    width: 100%;
  }
`;

export const SectionResult = styled.div`
  background: rgba(239, 243, 249, 1);
  height: 500px;
  width: 100%;
`;

export const LoadingSearch = styled.div`
  align-items: center;
  display: flex;
  height: 500px;
  justify-content: center;
`;

export const Result = styled.div`
  padding: 0;
`;

/*
* Styles Component Search Form
*/
export const Form = styled.form`
  align-items: center;
  background-image: url('../../images/bg_search_blue.png') ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 20vh;
  justify-content: center;
  width: 100%;

  @media only screen and ( max-width: 768px ) {
    align-items: center;
    display: flex;
    height: 180px;
    padding: 10px;
    padding-top: 100px;
    width: 100%;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 23px;
  color: white;
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  letter-spacing: 0.03em;
  line-height: 14px;
  padding: 0 20px;
  text-align: left;
  text-transform: uppercase;
  width: 400px;

  &::placeholder {
    color: white;
  }
  
  @media only screen and ( max-width: 768px ) {
    background: rgb(0 0 0 / 50%);
    width: 70%;
  }
`;

export const Button = styled.button`
  background: rgba(0, 213, 226, 1);
  border: none;
  border-radius: 23px;
  color: white;
  cursor: pointer;
  font-family: Epilogue , sans-serif;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  letter-spacing: 0.03em;
  line-height: 14px;
  text-transform: uppercase;
  width: 114px;
`;

/*
* Styles Component Search Result
*/
export const ResultSearch = styled.section`
  background: rgba(239, 243, 249, 1);
  height: 500px;
  width: 100%;
`;

export const ResultCard = styled.div`
  padding: 0;
`;

export const TitleAlbum = styled.div`
  width: 100%;
`;

export const TitleAlbumResult = styled.h1`
  color: rgba(0, 59, 229, 1);
  font-family: Epilogue , sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 21px;
  padding: 50px;
  text-align: center;
`;

export const AlbumDetails = styled.div`
  background: rgba(239, 243, 249, 1);
  display: flex;
  flex-flow: row wrap;
  height: auto;
  width: 100%;
`;

export const ErrorMessageContainer = styled.div<ErrorMessageContainerProps>`
  display: ${({ resultState }) => (resultState === false ? 'none' : 'block')};
  text-align: center;
  padding-top: 150px;
`;

export const ErrorImage = styled.img`
  padding-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: rgb(192, 195, 201);
  font-family: Epilogue , sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 31px;
  text-align: center;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 20px;
  right: 30px;
  position: relative;

  @media only screen and ( max-width: 768px ) {
    color: white;
    position: relative;
    right: 30px;
  }
`;
