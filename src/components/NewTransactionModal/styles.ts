import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  cursor: pointer;
  line-height: 0;
  color: ${props => props.theme['gray-500']};
  background: transparent;
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: min(100%, 50rem);
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      border-radius: 6px;
      border: 0;
      color: ${props => props.theme['gray-300']};
      padding: 1rem;
      background: ${props => props.theme['gray-900']};

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      color: ${props => props.theme.white};
      font-weight: bold;
      background: ${props => props.theme['green-500']};

      &:hover {
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`;
