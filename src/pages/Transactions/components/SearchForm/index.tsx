import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormContainer, SearchIcon } from './styles';
import { SearchFormType } from './interface';
import { searchFormSchema } from './schemas';

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormType) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type='text'
        placeholder='Busque uma transação '
        {...register('query')}
      />
      <button type='submit' disabled={isSubmitting}>
        <SearchIcon />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
