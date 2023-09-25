import { AlbumType } from '../../types';
import AlbumCard from '../AlbumCard/AlbumCard';
import Error from '../../images/circle_error.png';
import {
  ResultCard,
  ResultSearch,
  AlbumDetails,
  ErrorMessageContainer,
  ErrorImage,
  ErrorMessage,
} from './Styles';

type SearchResultProps = {
  searchResult: AlbumType[];
  resultState: boolean;
};

function SearchResult({
  searchResult,
  resultState,
} : SearchResultProps) {
  return (
    <ResultSearch>
      {searchResult.length > 0 ? (
        <ResultCard>
          <AlbumDetails>
            <AlbumCard searchResult={ searchResult } />
          </AlbumDetails>
        </ResultCard>
      ) : (
        <ErrorMessageContainer resultState={ resultState }>
          <ErrorImage src={ Error } alt="Error" />
          <ErrorMessage>
            Nenhum álbum foi encontrado
          </ErrorMessage>
        </ErrorMessageContainer>

      )}
    </ResultSearch>
  );
}

export default SearchResult;
