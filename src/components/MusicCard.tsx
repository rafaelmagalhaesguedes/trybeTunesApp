import { useEffect, useState } from 'react';
import iconChecked from '../images/checked_heart.png';
import iconUnChecked from '../images/empty_heart.png';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

type MusicCardProps = {
  trackId: number;
  trackName: string;
  previewUrl: string;
};

function MusicCard({ trackId, trackName, previewUrl } : MusicCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked((prevData) => !prevData);
  };

  useEffect(() => {
    const fetchFavoriteSongsAPI = async () => {
      if (trackId) {
        try {
          if (isChecked) {
            await addSong({ trackId, trackName, previewUrl });
          } else {
            await removeSong({ trackId, trackName, previewUrl });
          }
        } catch (error) {
          console.error('Error add/remove favorite song!', error);
        }
      }
    };
    fetchFavoriteSongsAPI();
  }, [isChecked, trackId, trackName, previewUrl]);

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
