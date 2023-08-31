import { useState } from 'react';
import Checked from '../images/checked_heart.png';
import Empty from '../images/empty_heart.png';

type MusicCardProps = {
  trackId: number;
  trackName: string;
  previewUrl: string;
};

function MusicCard({ trackId, trackName, previewUrl } : MusicCardProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked((prevData) => !prevData);
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
          onClick={ handleCheckBox }
        />
        {checked === true ? (
          <img src={ Checked } alt="favorite" />
        ) : (
          <img src={ Empty } alt="favorite" />
        )}
      </label>
    </div>
  );
}

export default MusicCard;
