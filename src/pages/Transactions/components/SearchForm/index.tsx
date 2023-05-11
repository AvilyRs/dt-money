import { useContextSelector } from 'use-context-selector';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchFormType } from './interface';
import { searchFormSchema } from './schemas';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';

import { SearchFormContainer, SearchIcon } from './styles';

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  });

  const fetchTransactions = useContextSelector(TransactionsContext, context => {
    return context.fetchTransactions;
  });

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
