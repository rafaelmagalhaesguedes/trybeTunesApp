import Error from '../../images/circle_error.png';
import { ErrorMessageContainer, ErrorImage, ErrorMessage } from './styles';

interface SearchNoFoundProps {
  resultState: boolean;
}

function SearchNoFound({ resultState } : SearchNoFoundProps) {
  if (!resultState) {
    return null; // Hide the component if resultState is false
  }

  return (
    <ErrorMessageContainer resultState={ resultState }>
      <ErrorImage src={ Error } alt="Error" />
      <ErrorMessage>
        Nenhum álbum foi encontrado
      </ErrorMessage>
    </ErrorMessageContainer>
  );
}

export default SearchNoFound;
