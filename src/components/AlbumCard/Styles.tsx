/*
* Styles Component Album
*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionAlbumCard = styled.section`
  /* Section Album Card */
`;

export const ListResults = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;
  list-style-type: none;
`;

export const Card = styled.div`
  height: 248px;
  margin-bottom: 30px;
  width: 200px;
`;

export const Results = styled.li`
  display: flex;
  flex-direction: column;
`;

export const AlbumLink = styled(Link)`
  color: rgba(61, 73, 92, 1);
  font-family: Epilogue , sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  margin: 13px 0;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: wrap;
`;

export const AlbumCover = styled.img`
  border-radius: 10px;
  height: 200px;
  width: 200px;
`;

export const AlbumName = styled.p`
  font-family: Epilogue , sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
`;

export const ArtistName = styled.p`
  /* Estilos para o nome do artista */
`;
