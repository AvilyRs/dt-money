import { useSummary } from '../../hooks/useSummary';
import { priceFormatter } from '../../utils/formatter';
import { IncomeIcon, OutcomeIcon, SummaryCard, SummaryContainer, TotalIcon } from './styles';

export function Summary() {
  const { income, outcome, total } = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <IncomeIcon />
        </header>
        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <OutcomeIcon />
        </header>
        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <TotalIcon />
        </header>
        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
