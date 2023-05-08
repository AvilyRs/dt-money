import { createContext, useEffect, useState } from 'react';

import { Transaction, TransactionContextType, TransctionsContextProviderProps } from './interface';

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsContextProvider({ children }: TransctionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadTransactions() {
    setIsLoading(true);
    fetch('http://localhost:3004/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      }).finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, isLoading }}>
      {children}
    </TransactionsContext.Provider>
  );
}
