import { useState } from 'react';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import iconChecked from '../../images/checked_heart.png';
import iconUnChecked from '../../images/empty_heart.png';
import { SongType } from '../../types';
import {
  MusicAudio,
  MusicFavorite,
  MusicName,
  SectionMusicCard,
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
        <p>{trackName}</p>
      </MusicName>
      <MusicAudio>
        <audio
          className="audio-container"
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          Seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </MusicAudio>
      <MusicFavorite>
        <label data-testid={ `checkbox-music-${trackId}` }>
          <input
            className="checkbox-favorite"
            type="checkbox"
            onChange={ handleCheck }
            checked={ isChecked }
          />
          {isChecked ? (
            <img className="checkbox-icon" src={ iconChecked } alt="favorite" />
          ) : (
            <img className="checkbox-icon" src={ iconUnChecked } alt="favorite" />
          )}
        </label>
      </MusicFavorite>
    </SectionMusicCard>
  );
}

export default MusicCard;
