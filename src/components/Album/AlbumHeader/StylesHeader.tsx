/*
* Styles Component Album Header
*/
import styled from 'styled-components';
import bgAlbum from '../../../images/bg_album.png';

export const AlbumHeaderContainer = styled.section`
  background-image: url(${bgAlbum}) ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;

  @media only screen and ( max-width : 768px ) {
    height: 200px;
  }
`;

export const WrapperAlbum = styled.div`
  padding: 170px 380px;
  
  @media only screen and ( max-width : 768px ) {
    display: none;
  }
`;

export const AlbumName = styled.h1`
  color: white;
  font-family: Epilogue , sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  
  @media only screen and ( max-width : 768px ) {
    color: black;
  }
`;

export const AlbumArtist = styled.h2`
  color: white;
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  
  @media only screen and ( max-width : 768px ) {
    color: black;
  }
`;
