import { ReactNode } from 'react';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export interface CreateNewTransaction {
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
}

export interface TransactionContextType {
  transactions: Transaction[];
  isLoading: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: CreateNewTransaction) => Promise<void>;
}

export interface TransctionsContextProviderProps {
  children: ReactNode;
}
