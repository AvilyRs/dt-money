import { useTransactions } from './useTransactions';

export function useSummary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    switch (transaction.type) {
    case 'income':
      acc.income += transaction.price;
      acc.total += transaction.price;
      break;
    case 'outcome':
      acc.outcome += transaction.price;
      acc.total -= transaction.price;
      break;
    }
    return acc;
  }, {
    income: 0,
    outcome: 0,
    total: 0
  });

  return summary;
}