import { ReactNode } from 'react';

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export interface TransactionContextType {
  transactions: Transaction[];
  isLoading: boolean;
}

export interface TransctionsContextProviderProps {
  children: ReactNode;
}
