import MusicCard from '../MusicCard/MusicCard';
import { AlbumType, SongType } from '../../types';

interface AlbumDetailsProps {
  album: AlbumType | null;
  songs: SongType[];
  favoriteSongs: SongType[];
}

function AlbumDetails({ album, songs, favoriteSongs } : AlbumDetailsProps) {
  return (
    <div className="album-details">
      <div className="album-cover">
        <img src={ album?.artworkUrl100 } alt="capa álbum" />
      </div>
      <div className="wrapper-album-mobile">
        <h1 className="album-name-mobile" data-testid="album-name">
          {album?.collectionName}
        </h1>
        <h2 className="album-artist-mobile" data-testid="artist-name">
          {album?.artistName}
        </h2>
      </div>
      <div className="album-music">
        {songs.map((song) => (
          <div className="music" key={ song.trackId }>
            <MusicCard
              dataSong={ song }
              favoriteSong={ favoriteSongs.some(
                (favoriteSong) => favoriteSong.trackId === song.trackId,
              ) }
              removeFavoriteSong={ () => {} }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumDetails;
