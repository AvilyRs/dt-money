import { useContextSelector } from 'use-context-selector';
import * as Dialog from '@radix-ui/react-dialog';
import { Controller, useForm } from 'react-hook-form';

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { NewTransactionFormType } from './interface';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
  const closeIconSize = '1.5rem';
  const transactionTypeButtonIconSize = '1.5rem';

  const createNewTransaction = useContextSelector(TransactionsContext, context => {
    return context.createNewTransaction;
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewTransactionFormType>({
    defaultValues: {
      type: 'income'
    }
  });

  async function handleCreateNewTransaction(data: NewTransactionFormType) {
    await createNewTransaction(data)
      .finally(() => {
        reset();
      });
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={closeIconSize} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />

          <input
            type='number'
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type='text'
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={transactionTypeButtonIconSize} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={transactionTypeButtonIconSize} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
