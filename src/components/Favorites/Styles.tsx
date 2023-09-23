/*
* Styles Component Favorites
*/
import styled from 'styled-components';

export const ContainerFavorites = styled.section`
  align-items: center;
  background-color: rgb(239, 243, 249);
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const HeaderFavorites = styled.div`
  align-items: center;
  background-image: url('../../images/bg_favorites.png') ,
  linear-gradient(135deg, rgb(0, 59, 229, 1), rgb(0, 213, 226, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 20vh;
  justify-content: center;
  width: 100%;
`;

export const TitleFavorites = styled.h1`
  color: white;
  font-family: Epilogue , sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;

  @media only screen and ( max-width : 768px ) {
    padding-top: 83px;
  }
`;

export const MusicFavorites = styled.div`
  align-items: center;
  background-color: rgb(239, 243, 249);
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const ListFavorites = styled.div`
  margin: 30px 0;
  width: 70%;
`;

export const LoadingFavorites = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  width: 100%;
`;
