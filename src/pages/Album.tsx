import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading/Loading';
import AlbumDetails from '../components/Album/AlbumDetails';
import Navbar from '../components/Navbar/Navbar';
import AlbumHeader from '../components/Album/AlbumHeader';
import { AlbumType, SongType } from '../types';
import '../components/Album/album.css';
import ButtonBackToTop from '../components/ButtonBackToTop/BackToTop';

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
    <div className="album-container">
      <Navbar />
      <AlbumHeader album={ album } />
      {!loading ? (
        <AlbumDetails album={ album } songs={ songs } favoriteSongs={ favoriteSongs } />
      ) : (
        <div className="loading-album">
          <Loading />
        </div>
      )}
      <ButtonBackToTop />
    </div>
  );
}
