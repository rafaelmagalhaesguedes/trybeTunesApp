import { useEffect, useState } from 'react';
import { SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import ButtonBackToTop from '../components/ButtonBackToTop/BackToTop';
import MusicCard from '../components/MusicCard/MusicCard';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import {
  ContainerFavorites,
  HeaderFavorites,
  ListFavorites,
  LoadingFavorites,
  MusicFavorites,
  TitleFavorites,
} from '../components/Favorites/Styles';

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
    <ContainerFavorites>
      <Navbar />
      <HeaderFavorites>
        <TitleFavorites>Músicas Favoritas</TitleFavorites>
      </HeaderFavorites>
      {!loading ? (
        <MusicFavorites>
          {favoritesSongs.map((song) => (
            <ListFavorites key={ song.trackId }>
              <MusicCard
                dataSong={ song }
                removeFavoriteSong={ fetchFavoriteSongsAPI }
                favoriteSong
              />
            </ListFavorites>
          ))}
        </MusicFavorites>
      ) : (
        <LoadingFavorites>
          <Loading />
        </LoadingFavorites>
      )}
      <ButtonBackToTop />
    </ContainerFavorites>
  );
}

export default Favorites;
