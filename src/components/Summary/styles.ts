import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

import styled, { css } from 'styled-components';
import { SummaryCardProps } from './interface';

const iconSize = '2rem';

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  width: min(100%, 1120px);
  margin: -5rem auto 0;

  overflow-x: auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 350px);
  }
`;

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: 6px;
  padding: 2rem;
  background: ${props => props.theme['gray-600']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
    background: ${props.theme['green-700']};
  `}
`;

export const IncomeIcon = styled(ArrowCircleUp).attrs({ size: iconSize})`
  color: ${props => props.theme['green-500']};
`;

export const OutcomeIcon = styled(ArrowCircleDown).attrs({ size: iconSize})`
  color: ${props => props.theme['red-300']};
`;

export const TotalIcon = styled(CurrencyDollar).attrs({ size: iconSize})`
  color: ${props => props.theme.white};
`;
