import { z } from 'zod';

export const dataSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});

export type InputData = z.infer<typeof dataSchema>;
