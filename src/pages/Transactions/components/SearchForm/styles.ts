import styled from 'styled-components';
import { MagnifyingGlass } from 'phosphor-react';

const iconSize = '1.25rem';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    color: ${props => props.theme['gray-300']};
    background: ${props => props.theme['gray-900']};

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border-radius: 6px;
    border: 1px solid ${props => props.theme['green-300']};
    color: ${props => props.theme['green-300']};
    font-weight: bold;

    &:hover {
      color: ${props => props.theme.white};
      border-color: ${props => props.theme['green-500']};
      background: ${props => props.theme['green-500']};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s
      ;
    }
  }
`;

export const SearchIcon = styled(MagnifyingGlass).attrs({
  size: iconSize
})`
`;
