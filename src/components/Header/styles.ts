import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${props => props.theme['gray-900']};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 6px;
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  background: ${props => props.theme['green-500']};

  &:hover {
    background: ${props => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`;
