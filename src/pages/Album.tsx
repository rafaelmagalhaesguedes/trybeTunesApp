import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { AlbumType, SongType } from '../types';

export default function Album() {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [songs, setSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) { // Verifica se o ID é valido antes de fazer uma requisição a API
        setLoading(true);
        try {
          const results = await getMusics(id);
          const [albumData, ...songsData] = results;
          setAlbum(albumData);
          setSongs(songsData);
        } catch (error) {
          console.error('Error fetching data!', error);
        } finally {
          setLoading(false);
        }
      } return null;
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="album-details">
          <h2 data-testid="artist-name">{album?.artistName}</h2>
          <h1 data-testid="album-name">{album?.collectionName}</h1>
          <div className="music-list">
            {songs.map((music) => (
              <div key={ music.trackId }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
