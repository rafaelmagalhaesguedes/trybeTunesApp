import { useNavigate } from 'react-router-dom';
import { AlbumType } from '../types';
import '../css/albumCard.css';

type AlbumCardProps = {
  resultTitle: string,
  searchResult: AlbumType[],
};

function AlbumCard({ resultTitle, searchResult } : AlbumCardProps) {
  const navigate = useNavigate();
  return (
    <div className="album-card">
      {searchResult.length === 0 ? (
        <p className="data">Nenhum álbum foi encontrado</p>
      ) : (
        <div>
          <div className="title-album">
            <h1 className="title-album-result">
              Resultado de álbuns de:
              {' '}
              {resultTitle}
            </h1>
          </div>
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
      )}
    </div>
  );
}

export default AlbumCard;
