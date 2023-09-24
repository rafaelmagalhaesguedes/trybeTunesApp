/*
* Styles Component Album
*/
import styled from 'styled-components';

export const AlbumContainer = styled.section`
  background: rgba(239, 243, 249, 1);
  height: auto;
  width: 100%;
`;

export const AlbumHeaderContainer = styled.section`
  background-image: url('../../images/bg_album.png') ,
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

/*
* Styles Component Album Header
*/
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

/*
* Styles Component Album Details
*/
export const SectionDetails = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const AlbumCover = styled.div`
  padding: 20px;
  width: 20%;

  @media only screen and ( max-width : 768px ) {
    height: 140px;
    padding: 20px;
    text-align: center;
    width: 100%;
  }
`;

export const AlbumCoverImage = styled.img`
  border-radius: 12px;
  bottom: 140px;
  box-shadow: -8px 8px 8px 1px rgba(68, 73, 85, 0.2);
  height: 240px;
  position: relative;
  width: 240px;

  @media only screen and ( max-width : 768px ) { 
    bottom: 120px;
  }
`;

export const WrapperAlbumMobile = styled.div`
  display: none;

  @media only screen and ( max-width : 768px ) {
    display: block;
    padding: 10px;
    text-align: center;
  }
`;

export const AlbumNameMobile = styled.h1`

  @media only screen and ( max-width : 768px ) {
    color: black;
  }
`;

export const AlbumArtistMobile = styled.h2`

  @media only screen and ( max-width : 768px ) {
    color: black;
  }
`;

export const AlbumMusic = styled.div`
  padding: 20px;
  width: 60%;

  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: 100%;
  }
`;

export const Music = styled.div`

  @media only screen and ( max-width : 768px ) {
    display: flex;
    flex-direction: column;
  }
`;

export const LoadingAlbum = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;
