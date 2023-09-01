import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import { AlbumType } from '../types';

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<AlbumType[]>([]);
  const [searchResultTitle, setSearchResultTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInput = searchValue.length > 1;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchResultTitle(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const result = await searchAlbumsAPI(searchValue);
      setSearchResult(result);
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
      setSearchValue('');
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="section-search">

      <form className="form">
        <div className="search-form">
          <input
            className="search-input-form"
            type="text"
            name="searchValue"
            id="searchValue"
            value={ searchValue }
            onChange={ handleSearch }
            data-testid="search-artist-input"
          />

          <button
            className="search-button-form"
            data-testid="search-artist-button"
            disabled={ !validateInput }
            onClick={ handleSubmit }
          >
            Pesquisar
          </button>
        </div>
      </form>

      {searchResult.length > 0 ? (
        <div className="result-search">
          <h1 className="title-result-search">
            Resultado de álbuns de:
            {' '}
            {searchResultTitle}
          </h1>
          <ul className="list-result-search">
            {searchResult.map((album) => (
              <li key={ album.collectionId }>
                <a
                  className="link-result-search"
                  href={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                  onClick={ (e) => {
                    e.preventDefault();
                    navigate(`/album/${album.collectionId}`);
                  } }
                >
                  <img
                    className="cover-result-search"
                    src={ album.artworkUrl100 }
                    alt="cover album"
                  />
                  {album.collectionName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="search-data-not-found">
          <p>Nenhum álbum foi encontrado</p>
        </div>
      )}
    </div>
  );
}

export default Search;
