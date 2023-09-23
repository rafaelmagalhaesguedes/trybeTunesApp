import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, StyledFontAwesomeIcon } from './styles';

type SearchFormProps = {
  onSearch: (searchValue: string) => void;
};

function SearchForm({ onSearch } : SearchFormProps) {
  const [searchValue, setSearchValue] = useState('');

  const validateInput = searchValue.length > 1;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    if (validateInput) {
      onSearch(searchValue);
    }
  };

  return (
    <Form>
      <Input
        className="search-input-form"
        type="text"
        name="searchValue"
        id="searchValue"
        value={ searchValue }
        onChange={ handleSearch }
        data-testid="search-artist-input"
        placeholder="Digite sua pesquisa"
      />

      <StyledFontAwesomeIcon icon={ faSearch } />

      <Button
        className="search-button-form"
        data-testid="search-artist-button"
        disabled={ !validateInput }
        onClick={ (e) => {
          e.preventDefault();
          handleSubmit();
        } }
      >
        Procurar
      </Button>
    </Form>
  );
}

export default SearchForm;
