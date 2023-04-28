import { SearchFormContainer, SearchIcon } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input
        type='text'
        placeholder='Busque uma transação '
      />
      <button type='submit'>
        <SearchIcon />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
