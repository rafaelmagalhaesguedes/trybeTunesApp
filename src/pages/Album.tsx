import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { AlbumType, SongType } from '../types';

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

  if (loading) return <Loading />;

  return (
    <div className="album-details">
      <div className="album-cover">
        <img src={ album?.artworkUrl100 } alt="capa álbum" />
      </div>
      <div className="album-title">
        <h1 data-testid="album-name">{album?.collectionName}</h1>
        <h2 data-testid="artist-name">{album?.artistName}</h2>
      </div>
      <div className="music-list">
        {songs.map((song) => (
          <div key={ song.trackId }>
            <MusicCard
              trackId={ song.trackId }
              trackName={ song.trackName }
              previewUrl={ song.previewUrl }
              favoriteTrack={ favoriteSongs
                .some((favoriteSong) => favoriteSong.trackId === song.trackId) }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
