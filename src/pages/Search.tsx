import { useState } from 'react';
import { AlbumType } from '../types';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import SearchNoFound from '../components/Search/SearchNoFound';
import SearchResult from '../components/Search/SearchResult';
import SearchForm from '../components/Search/SearchForm';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import '../components/Search/search.css';
import ButtonBackToTop from '../components/ButtonBackToTop/BackToTop';

function Search() {
  const [searchResult, setSearchResult] = useState<AlbumType[]>([]);
  const [searchResultTitle] = useState('');
  const [resultState, setResultState] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (value: string) => {
    try {
      setLoading(true);
      const result = await searchAlbumsAPI(value);
      setSearchResult(result);
      if (result) {
        setResultState(true);
      }
    } catch (error) {
      console.error('Error fetching data!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-search">

      <Navbar />

      <SearchForm onSearch={ handleSubmit } />

      <div className="result-search">
        {loading ? (
          <div className="loading-search">
            <Loading />
          </div>
        ) : (
          <div className="result">
            {searchResult.length > 0 ? (
              <SearchResult
                searchResult={ searchResult }
                searchResultTitle={ searchResultTitle }
                resultState={ resultState }
              />
            ) : (
              <SearchNoFound
                resultState={ resultState }
              />
            )}
          </div>
        )}
      </div>
      <ButtonBackToTop />
    </section>
  );
}

export default Search;
