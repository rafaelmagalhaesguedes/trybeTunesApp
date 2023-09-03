import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';
import { AlbumType } from '../types';
import '../css/search.css';

function Search() {
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

  return (
    <section className="section-search">
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
            placeholder="Nome do artista"
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
          <AlbumCard
            resultTitle={ searchResultTitle }
            searchResult={ searchResult }
          />
        )}
      </div>
    </section>
  );
}

export default Search;
