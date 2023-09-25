/*
* Styles Page Album
*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlbumContainer = styled.section`
  background: rgba(239, 243, 249, 1);
  height: auto;
  width: 100%;
`;

export const LoadingAlbum = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;

export const ErrorConnect = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`;

export const TitleMessage = styled.h2`
  padding-bottom: 20px;
`;

export const TextMessage = styled.p`
  padding: 20px 0;
`;

export const LinkSearch = styled(Link)`
  text-decoration: none;
  background: blue;
  color: white;
  text-align: center;
  padding: 10px;
  width: 10rem;
`;
