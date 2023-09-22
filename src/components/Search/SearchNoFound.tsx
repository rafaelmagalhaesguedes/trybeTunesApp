import Error from '../../images/circle_error.png';

interface SearchNoFoundProps {
  resultState: boolean;
}

function SearchNoFound({ resultState } : SearchNoFoundProps) {
  if (!resultState) {
    return null; // Hide the component if resultState is false
  }

  return (
    <div style={ { textAlign: 'center', paddingTop: '150px' } }>
      <img className="circle-error" src={ Error } alt="Error" />
      <p className="search-error-message">Nenhum álbum foi encontrado</p>
    </div>
  );
}

export default SearchNoFound;
