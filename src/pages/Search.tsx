import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import { AlbumType } from '../types';

function Search() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [validateSearch, setValidateSearch] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [searchResult, setSearchResult] = useState<AlbumType[]>([]);
  const [valueTitleResult, setValueTitleResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setValueTitleResult(e.target.value);
  };

  const fetchSearchAlbumsAPI = async () => {
    if (validateSearch) {
      setLoading(true);
      try {
        const result = await searchAlbumsAPI(searchValue);
        setSearchResult(result);
      } catch (error) {
        console.error('Error fetching data!', error);
      } finally {
        setLoading(false);
        setSearchValue('');
      }
    }
  };

  useEffect(() => {
    setValidateSearch(searchValue.length > 1);
    setButtonDisabled(!validateSearch);
  }, [searchValue, validateSearch]);

  return (
    <div className="section-search">
      <div className="form">
        {!loading ? (
          <div className="search-form">
            <input
              type="text"
              name="searchValue"
              id="searchValue"
              value={ searchValue }
              onChange={ handleSearch }
              data-testid="search-artist-input"
            />

            <button
              data-testid="search-artist-button"
              disabled={ buttonDisabled }
              onClick={ () => {
                fetchSearchAlbumsAPI();
              } }
            >
              Pesquisar
            </button>
          </div>
        ) : (
          <Loading />
        )}
      </div>

      <div className="result-search">
        {searchResult.length > 0 ? (
          <div>
            <h1>
              Resultado de álbuns de:
              {' '}
              { valueTitleResult }
            </h1>
            <ul>
              {searchResult.map((album) => (
                <li key={ album.collectionId }>
                  <a
                    href={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                    onClick={ (e) => {
                      e.preventDefault();
                      navigate(`/album/${album.collectionId}`);
                    } }
                  >
                    {album.collectionName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Nenhum álbum foi encontrado</p>
        )}
      </div>
    </div>
  );
}

export default Search;
