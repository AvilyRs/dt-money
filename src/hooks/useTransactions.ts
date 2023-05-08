import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useTransactions() {
  const context = useContext(TransactionsContext);
  const isContextInvalid = Object.keys(context).length === 0;

  if (isContextInvalid) {
    throw new Error('useTransactions should be use within a TransactionsContextProvider');
  }

  return context;
}
