import * as zod from 'zod';
import { newTransactionFormSchema } from './schemas';

export interface TransctionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export type NewTransactionFormType = zod.infer<typeof newTransactionFormSchema>;
