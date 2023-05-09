import * as zod from 'zod';

export const searchFormSchema = zod.object({
  query: zod.string()
});
