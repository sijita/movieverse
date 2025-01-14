import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignupSchema = z.infer<typeof signupSchema>;
