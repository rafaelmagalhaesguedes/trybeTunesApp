import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import { AlbumType, SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import ButtonBackToTop from '../components/ButtonBackToTop/BackToTop';
import AlbumDetails from '../components/Album/AlbumDetails/AlbumDetails';
import AlbumHeader from '../components/Album/AlbumHeader/AlbumHeader';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import {
  AlbumContainer,
  ErrorConnect,
  LinkSearch,
  LoadingAlbum,
  TextMessage,
  TitleMessage,
} from '../components/Album/Styles';

export default function Album() {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [songs, setSongs] = useState<SongType[]>([]);
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAPI = async () => {
      if (id) {
        try {
          setLoading(true);
          const results = await getMusics(id);
          const favoriteSongsData = await getFavoriteSongs();
          const [albumData, ...songsData] = results;
          setAlbum(albumData);
          setSongs(songsData);
          setFavoriteSongs(favoriteSongsData);
        } catch (error) {
          console.error('Error fetching data!', error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('ID inválido ou inexistente');
      }
    };
    fetchDataAPI();
  }, [id]);

  return (
    <AlbumContainer>
      <Navbar />
      <AlbumHeader album={ album } />
      {album !== null ? (
        <AlbumDetails
          album={ album }
          songs={ songs }
          favoriteSongs={ favoriteSongs }
        />
      ) : (
        <LoadingAlbum>
          {!loading ? (
            <ErrorConnect>
              <TitleMessage>Problemas na conexão com a API...</TitleMessage>
              <TextMessage>Tente pesquisar novamente!</TextMessage>
              <LinkSearch to="/search">Buscar</LinkSearch>
            </ErrorConnect>
          ) : (
            <Loading />
          )}
        </LoadingAlbum>
      )}
      <ButtonBackToTop />
    </AlbumContainer>
  );
}
