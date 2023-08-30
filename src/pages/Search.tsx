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
  const [dataSearch, setDataSearch] = useState<AlbumType[]>([]);
  const [artistValue, setArtistValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setArtistValue(e.target.value);
  };

  const fetchSearchAlbumsAPI = async () => {
    if (validateSearch) {
      setLoading(true);
      try {
        const data = await searchAlbumsAPI(searchValue);
        setDataSearch(data);
      } catch (error) {
        console.log('Error', error);
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

      <div className="search">
        {dataSearch.length > 0 ? (
          <div>
            Resultado de álbuns de:
            {' '}
            { artistValue }
            <ul>
              {dataSearch.map((artist) => (
                <li key={ artist.collectionId }>
                  <a
                    href={ `/album/${artist.collectionId}` }
                    data-testid={ `link-to-album-${artist.collectionId}` }
                    onClick={ (e) => {
                      e.preventDefault();
                      navigate(`/album/${artist.collectionId}`);
                    } }
                  >
                    {artist.collectionName}
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
