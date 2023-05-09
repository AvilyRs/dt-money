import * as zod from 'zod';

import { searchFormSchema } from './schemas';

export type SearchFormType = zod.infer<typeof searchFormSchema>;
