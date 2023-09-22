import { useState } from 'react';
import iconChecked from '../images/checked_heart.png';
import iconUnChecked from '../images/empty_heart.png';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import { SongType } from '../types';
import '../css/musicCard.css';

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
    <div className="music-card">
      <div className="music-name">
        <p>{trackName}</p>
      </div>
      <div className="music-audio">
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
      </div>
      <div className="music-favorite">
        <label data-testid={ `checkbox-music-${trackId}` }>
          <input
            className="checkbox-favorite"
            type="checkbox"
            onChange={ handleCheck }
            checked={ isChecked }
          />
          {isChecked ? (
            <img src={ iconChecked } alt="favorite" />
          ) : (
            <img src={ iconUnChecked } alt="favorite" />
          )}
        </label>
      </div>
    </div>
  );
}

export default MusicCard;
