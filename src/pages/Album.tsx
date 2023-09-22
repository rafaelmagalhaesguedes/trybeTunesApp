import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import Navbar from '../components/Navbar';
import { AlbumType, SongType } from '../types';
import '../css/album.css';

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
      <div className="album-header">
        <div className="wrapper-album">
          <h1 className="album-name" data-testid="album-name">{album?.collectionName}</h1>
          <h2 className="album-artist" data-testid="artist-name">{album?.artistName}</h2>
        </div>
      </div>
      {!loading ? (
        <div className="album-details">
          <div className="album-cover">
            <img src={ album?.artworkUrl100 } alt="capa álbum" />
          </div>
          <div className="wrapper-album-mobile">
            <h1
              className="album-name-mobile"
              data-testid="album-name"
            >
              {album?.collectionName}
            </h1>
            <h2
              className="album-artist-mobile"
              data-testid="artist-name"
            >
              {album?.artistName}
            </h2>
          </div>
          <div className="album-music">
            {songs.map((song) => (
              <div className="music" key={ song.trackId }>
                <MusicCard
                  dataSong={ song }
                  favoriteSong={ favoriteSongs
                    .some((favoriteSong) => favoriteSong.trackId === song.trackId) }
                  removeFavoriteSong={ () => {} }
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="loading-album">
          <Loading />
        </div>
      )}
    </div>
  );
}
