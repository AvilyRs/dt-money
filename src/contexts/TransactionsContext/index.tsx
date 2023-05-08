import { createContext, useEffect, useState } from 'react';

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
