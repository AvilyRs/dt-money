import { useTransactions } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';
import { IncomeIcon, OutcomeIcon, SummaryCard, SummaryContainer, TotalIcon } from './styles';

export function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <IncomeIcon />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <OutcomeIcon />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <TotalIcon />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
