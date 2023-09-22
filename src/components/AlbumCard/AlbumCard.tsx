import { useNavigate, Link } from 'react-router-dom';
import { AlbumType } from '../../types';
import './albumCard.css';

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
              <Link
                className="link-album"
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
                onClick={ (e) => {
                  e.preventDefault();
                  navigate(`/album/${album.collectionId}`);
                } }
              >
                <img
                  className="cover-album"
                  src={ album.artworkUrl100 }
                  alt="cover album"
                />
                {album.collectionName}
                <p className="artist-name">{album.artistName}</p>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AlbumCard;
