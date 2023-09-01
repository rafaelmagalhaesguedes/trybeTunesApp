import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

function Favorites() {
  const [favoritesSongs, setFavoritesSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFavoriteSongsAPI = async () => {
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

  useEffect(() => {
    fetchFavoriteSongsAPI();
  }, []);

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
            removeFavoriteSong={ fetchFavoriteSongsAPI }
            favoriteTrack
          />
        </div>
      ))}
    </div>
  );
}

export default Favorites;
