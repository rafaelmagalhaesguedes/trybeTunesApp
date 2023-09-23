import { AlbumType } from '../../types';
import AlbumCard from '../AlbumCard/AlbumCard';
import Error from '../../images/circle_error.png';
import {
  ResultCard,
  ResultSearch,
  TitleAlbum,
  TitleAlbumResult,
  AlbumDetails,
  ErrorMessageContainer,
  ErrorImage,
  ErrorMessage,
} from './Styles';

type SearchResultProps = {
  searchResult: AlbumType[];
  searchResultTitle: string;
  resultState: boolean;
};

function SearchResult({
  searchResult,
  searchResultTitle,
  resultState,
} : SearchResultProps) {
  return (
    <ResultSearch>
      {searchResult.length > 0 ? (
        <ResultCard>
          <TitleAlbum>
            <TitleAlbumResult>
              Resultado de álbuns de:
              {' '}
              { searchResultTitle }
            </TitleAlbumResult>
          </TitleAlbum>
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
