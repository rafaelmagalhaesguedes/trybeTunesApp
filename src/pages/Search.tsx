import { useState } from 'react';
import { AlbumType } from '../types';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ButtonBackToTop from '../components/ButtonBackToTop/BackToTop';
import SearchNoFound from '../components/Search/SearchNoFound';
import SearchResult from '../components/Search/SearchResult';
import SearchForm from '../components/Search/SearchForm';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import {
  SectionSearch,
  SectionResult,
  LoadingSearch,
  Result,
} from '../components/Search/Styles';

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
    <SectionSearch>
      <Navbar />
      <SearchForm onSearch={ handleSubmit } />
      <SectionResult>
        {loading ? (
          <LoadingSearch>
            <Loading />
          </LoadingSearch>
        ) : (
          <Result>
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
          </Result>
        )}
      </SectionResult>
      <ButtonBackToTop />
    </SectionSearch>
  );
}

export default Search;
