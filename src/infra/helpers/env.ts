import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string().trim().min(1),
});

export const env = envSchema.parse(process.env);
