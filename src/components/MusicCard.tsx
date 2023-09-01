import { useState } from 'react';
import iconChecked from '../images/checked_heart.png';
import iconUnChecked from '../images/empty_heart.png';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type MusicCardProps = {
  trackId: number;
  trackName: string;
  previewUrl: string;
  favoriteTrack: boolean,
};

function MusicCard({ trackId, trackName, previewUrl, favoriteTrack } : MusicCardProps) {
  const [isChecked, setIsChecked] = useState(favoriteTrack);

  const handleCheck = () => {
    setIsChecked((prevData) => !prevData);

    if (!isChecked) {
      addSong({ trackId, trackName, previewUrl });
    } else {
      removeSong({ trackId, trackName, previewUrl });
    }
  };

  return (
    <div className="music-card">
      <h3>{trackName}</h3>
      <audio
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
        <track kind="captions" />
        Seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
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
  );
}

export default MusicCard;
