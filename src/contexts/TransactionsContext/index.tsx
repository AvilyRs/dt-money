import { createContext, useEffect, useState } from 'react';

import { CreateNewTransaction, Transaction, TransactionContextType, TransctionsContextProviderProps } from './interface';
import { api } from '../../lib/axios';

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsContextProvider({ children }: TransctionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchTransactions(query?: string) {
    setIsLoading(true);
    const response = await api.get('transactions', {
      params: {
        q: query
      }
    }).finally(() => {
      setIsLoading(false);
    });

    setTransactions(response.data);
  }

  async function createNewTransaction(data: CreateNewTransaction) {
    const { description, category, price, type } = data;

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date()
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      isLoading,
      fetchTransactions,
      createNewTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}
