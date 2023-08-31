import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { AlbumType, SongType } from '../types';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default function Album() {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [songs, setSongs] = useState<SongType[]>([]);
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        try {
          const results = await getMusics(id);
          const [albumData, ...songsData] = results;
          setAlbum(albumData);
          setSongs(songsData);
          const favoriteSongsData = await getFavoriteSongs();
          setFavoriteSongs(favoriteSongsData);
        } catch (error) {
          console.error('Error fetching data!', error);
        } finally {
          setLoading(false);
        }
      } else console.error('ID inválido ou inexistente');
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="album-details">
          <img src={ album?.artworkUrl100 } alt="capa álbum" />
          <h2 data-testid="artist-name">{album?.artistName}</h2>
          <h1 data-testid="album-name">{album?.collectionName}</h1>
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
      )}
    </div>
  );
}
