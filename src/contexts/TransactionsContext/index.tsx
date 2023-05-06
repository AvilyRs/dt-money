import { createContext, useContext, useEffect, useState } from 'react';

import { Transaction, TransactionContextType, TransctionsContextProviderProps } from './interface';

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsContextProvider({ children }: TransctionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    fetch('http://localhost:3004/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      });
  }
  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  const isContextInvalid = Object.keys(context).length === 0;

  if (isContextInvalid) {
    throw new Error('useTransactions should be use within a TransactionsContextProvider');
  }

  return context;
}
