import * as Dialog from '@radix-ui/react-dialog';

import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';

export function NewTransactionModal() {
  const iconSize = '1.5rem';

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={iconSize} />
        </CloseButton>

        <form action=''>
          <input type='text'
            placeholder='Descrição'
            required />

          <input type='number'
            placeholder='Preço'
            required />

          <input type='text'
            placeholder='Categoria'
            required />

          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
