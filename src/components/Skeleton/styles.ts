import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 6px;

  background: ${props => props.theme['gray-600']};

  animation: skeletonTransition infinite 1s;

  @keyframes skeletonTransition {
    0% {
      background: ${props => props.theme['gray-600']};
    }
    50% {
      background: ${props => props.theme['gray-700']};
    }
    100% {
      background: ${props => props.theme['gray-600']};
    }
  }
`;
