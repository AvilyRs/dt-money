import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormType } from './interface';
import { searchFormSchema } from './schemas';
import { useTransactions } from '../../../../hooks/useTransactions';

import { SearchFormContainer, SearchIcon } from './styles';

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  });

  const { fetchTransactions } = useTransactions();

  async function handleSearchTransactions(data: SearchFormType) {
    await fetchTransactions(data.query);
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
