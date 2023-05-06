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
}

export interface TransctionsContextProviderProps {
  children: ReactNode;
}
