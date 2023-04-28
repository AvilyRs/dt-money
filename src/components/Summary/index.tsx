import { EntriesIcon, OutIcon, SummaryCard, SummaryContainer, TotalIcon } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <EntriesIcon />
        </header>
        <strong>R$ 17.000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <OutIcon />
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
