/** *****************************************
*
*    CSS Styles Component Music Card
*
********************************************* */
import styled from 'styled-components';

export const SectionMusicCard = styled.section`
  align-items: center;
  border: 1px solid gainsboro;
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;

  @media only screen and ( max-width : 768px ) {
    flex-flow: row wrap;
  }
`;

export const MusicName = styled.div`
  border-radius: 4px;
  width: 70%;
  heigth: 100px;
  padding: 10px;
  margin: 5px;
  background-color: black;

  @media only screen and ( max-width : 768px ) {
    width: 100%;
  }
`;

export const TrackName = styled.p`
  color: white;
  font-family: Epilogue , sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`;

export const MusicAudio = styled.div`
  border-radius: 10px;
  width: 100%;
  text-align: center;

  .audio-container {
    width: 100%;
  }
`;

export const Audio = styled.audio`
  width: 100%;
`;

export const Track = styled.track`
  font-size: 1rem;
`;

export const Code = styled.code`
  font-size: 1rem;
`;

export const MusicFavorite = styled.div`
  width: 10%;
  padding: 20px;
  text-align: center;

  @media only screen and ( max-width : 768px ) {
    padding-bottom: 20px;
    width: 100%;
  }
`;

export const Label = styled.label`
  margin: 0;
  paddin: 0;
`;

export const Input = styled.input`
  display: none;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
