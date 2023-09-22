import { AlbumType } from '../../types';
import AlbumCard from '../AlbumCard/AlbumCard';
import Error from '../../images/circle_error.png';

interface SearchResultProps {
  searchResult: AlbumType[];
  searchResultTitle: string;
  resultState: boolean;
}

function SearchResult({
  searchResult,
  searchResultTitle,
  resultState,
} : SearchResultProps) {
  return (
    <div className="result-search">
      {searchResult.length > 0 ? (
        <div className="result-card">
          <div className="title-album">
            <h1 className="title-album-result">
              Resultado de álbuns de:
              {' '}
              { searchResultTitle }
            </h1>
          </div>
          <div className="album-card">
            <AlbumCard searchResult={ searchResult } />
          </div>
        </div>
      ) : (
        <div
          style={ {
            display: resultState === false ? 'none' : 'block',
            textAlign: 'center',
            paddingTop: '150px',
          } }
        >
          <img src={ Error } alt="Error" className="circle-error" />
          <p className="search-error-message">Nenhum álbum foi encontrado</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
