import { useSummary } from '../../hooks/useSummary';
import { useTransactions } from '../../hooks/useTransactions';
import { priceFormatter } from '../../utils/formatter';
import { Skeleton } from '../Skeleton';
import { IncomeIcon, OutcomeIcon, SummaryCard, SummaryContainer, TotalIcon } from './styles';

export function Summary() {
  const { income, outcome, total } = useSummary();

  const { isLoading } = useTransactions();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <IncomeIcon />
        </header>
        {isLoading ? (
          <Skeleton style={{ height: '38px', marginTop: '1rem' }} />
        ) : (
          <strong>{priceFormatter.format(income)}</strong>
        )}
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <OutcomeIcon />
        </header>
        {isLoading ? (
          <Skeleton style={{ height: '38px', marginTop: '1rem' }} />
        ) : (
          <strong>{priceFormatter.format(outcome)}</strong>
        )}
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <TotalIcon />
        </header>
        {isLoading ? (
          <Skeleton style={{ height: '38px', marginTop: '1rem' }} />
        ) : (
          <strong>{priceFormatter.format(total)}</strong>
        )}
      </SummaryCard>
    </SummaryContainer>
  );
}
