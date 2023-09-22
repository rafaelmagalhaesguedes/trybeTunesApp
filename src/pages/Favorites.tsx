import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading/Loading';
import MusicCard from '../components/MusicCard/MusicCard';
import Navbar from '../components/Navbar/Navbar';
import '../components/Favorites/favorites.css';

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

  return (
    <div className="container-favorites">
      <Navbar />
      <div className="header-favorites">
        <h1 className="title-favorites">Músicas Favoritas</h1>
      </div>
      {!loading ? (
        <div className="music-favorites">
          {favoritesSongs.map((song) => (
            <div className="list-favorites" key={ song.trackId }>
              <MusicCard
                dataSong={ song }
                removeFavoriteSong={ fetchFavoriteSongsAPI }
                favoriteSong
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="loading-favorites">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Favorites;
