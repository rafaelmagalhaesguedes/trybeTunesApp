import { useNavigate } from 'react-router-dom';
import { AlbumType } from '../types';
import '../css/albumCard.css';

type AlbumCardProps = {
  searchResult: AlbumType[],
};

function AlbumCard({ searchResult } : AlbumCardProps) {
  const navigate = useNavigate();
  return (
    <div className="album-card">
      <ul className="list-results">
        {searchResult.map((album) => (
          <div className="card" key={ album.collectionId }>
            <li className="results">
              <img
                className="cover-album"
                src={ album.artworkUrl100 }
                alt="cover album"
              />
              <a
                className="link-album"
                href={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
                onClick={ (e) => {
                  e.preventDefault();
                  navigate(`/album/${album.collectionId}`);
                } }
              >
                {album.collectionName}
              </a>
              <p className="artist-name">{album.artistName}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AlbumCard;
