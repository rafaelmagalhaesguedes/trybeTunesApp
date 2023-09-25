/*
* Styles Component Album Details
*/
import styled from 'styled-components';

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
