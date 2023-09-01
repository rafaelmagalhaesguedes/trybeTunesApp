import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

function Favorites() {
  const [favoritesSongs, setFavoritesSongs] = useState<SongType[]>([]);
  const [removeFavoriteSong, setRemoveFavoriteSong] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fecthFavoriteSongsAPI = async () => {
      try {
        setLoading(true);
        const favorites = await getFavoriteSongs();
        setFavoritesSongs(favorites);
      } catch (error) {
        console.error('Error fetching data!', error);
      } finally {
        setLoading(false);
      }
    };
    fecthFavoriteSongsAPI();
  }, [removeFavoriteSong]);

  const handleRemoveFavoriteSong = () => {
    setRemoveFavoriteSong(!removeFavoriteSong);
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Favorites</h1>
      {favoritesSongs.map((song) => (
        <div key={ song.trackId }>
          <MusicCard
            trackId={ song.trackId }
            trackName={ song.trackName }
            previewUrl={ song.previewUrl }
            removeFavoriteSong={ () => handleRemoveFavoriteSong() }
            favoriteTrack
          />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
