import styled from 'styled-components';
import { PriceHighlightProps } from './interface';

export const TransactionsContainer = styled.main`
  width: min(100%, 1120px);
  margin: 4rem auto 0;
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.theme['gray-300']};

  color: ${props => props.variant === 'income' && props.theme['green-300']};
  color: ${props => props.variant === 'outcome' && props.theme['red-300']};
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 1rem;
    background: ${props => props.theme['gray-700']};

    &:first-of-type {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-of-type {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const Padder = styled.div`
  padding: 0 1.5rem;
`;
