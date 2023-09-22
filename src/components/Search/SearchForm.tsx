import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    <form className="form">
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
    </form>
  );
}

export default SearchForm;
