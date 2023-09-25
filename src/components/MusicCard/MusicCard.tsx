import { useState } from 'react';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import iconChecked from '../../images/checked_heart.png';
import iconUnChecked from '../../images/empty_heart.png';
import { SongType } from '../../types';
import {
  SectionMusicCard,
  MusicName,
  TrackName,
  MusicAudio,
  Audio,
  MusicFavorite,
  Track,
  Code,
  Label,
  Input,
  Icon,
} from './Styles';

type MusicCardProps = {
  dataSong: SongType,
  favoriteSong: boolean,
  removeFavoriteSong: () => void,
};

function MusicCard({ dataSong, favoriteSong, removeFavoriteSong } : MusicCardProps) {
  const { trackId, trackName, previewUrl } = dataSong;

  const [isChecked, setIsChecked] = useState(favoriteSong);

  const handleCheck = () => {
    setIsChecked((prevData) => !prevData);

    if (!isChecked) {
      addSong(dataSong);
    } else {
      removeSong(dataSong);
      removeFavoriteSong();
    }
  };

  return (
    <SectionMusicCard>
      <MusicName>
        <TrackName>{trackName}</TrackName>
      </MusicName>
      <MusicAudio>
        <Audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <Track kind="captions" />
          Seu navegador não suporta o elemento
          <Code>audio</Code>
          .
        </Audio>
      </MusicAudio>
      <MusicFavorite>
        <Label data-testid={ `checkbox-music-${trackId}` }>
          <Input
            type="checkbox"
            onChange={ handleCheck }
            checked={ isChecked }
          />
          {isChecked ? (
            <Icon src={ iconChecked } alt="favorite" />
          ) : (
            <Icon src={ iconUnChecked } alt="favorite" />
          )}
        </Label>
      </MusicFavorite>
    </SectionMusicCard>
  );
}

export default MusicCard;
