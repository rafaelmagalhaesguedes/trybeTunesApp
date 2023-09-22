import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';
import { AlbumType } from '../types';
import '../css/search.css';
import Error from '../images/circle_error.png';
import LogoMobile from '../images/logo-mobile.png';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<AlbumType[]>([]);
  const [searchResultTitle, setSearchResultTitle] = useState('');
  const [resultState, setResultState] = useState(false);
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
      if (result) {
        setResultState(true);
      }
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
      setSearchValue('');
    }
  };

  return (
    <section className="section-search">
      <form className="form">
        <img className="logo-mobile" src={ LogoMobile } alt="Logo" />
        <div className="search-form">
          <input
            className="search-input-form"
            type="text"
            name="searchValue"
            id="searchValue"
            value={ searchValue }
            onChange={ handleSearch }
            data-testid="search-artist-input"
            placeholder="Digite sua pesquisa"
          />

          <FontAwesomeIcon className="icon-search" icon={ faSearch } />

          <button
            className="search-button-form"
            data-testid="search-artist-button"
            disabled={ !validateInput }
            onClick={ (e) => {
              e.preventDefault();
              handleSubmit();
            } }
          >
            Procurar
          </button>
        </div>
      </form>

      <div className="result-search">
        {loading ? (
          <div className="loading-search">
            <Loading />
          </div>
        ) : (
          <div className="result-search">
            {searchResult.length > 0 ? (
              <>
                <div className="title-album">
                  <h1 className="title-album-result">
                    Resultado de álbuns de:
                    {' '}
                    {searchResultTitle}
                  </h1>
                </div>
                <div className="album-card">
                  <AlbumCard
                    searchResult={ searchResult }
                  />
                </div>
              </>
            ) : (
              <div
                style={ {
                  display: resultState === false ? 'none' : 'block',
                  textAlign: 'center',
                  paddingTop: '150px' } }
              >
                <img className="circle-error" src={ Error } alt="Error" />
                <p className="search-error-message">Nenhum álbum foi encontrado</p>
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
}

export default Search;
