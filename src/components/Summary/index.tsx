import { IncomeIcon, OutcomeIcon, SummaryCard, SummaryContainer, TotalIcon } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <IncomeIcon />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <OutcomeIcon />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <TotalIcon />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
