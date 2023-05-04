export interface PriceHighlightProps {
  variant?: 'income' | 'outcome';
}

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}
