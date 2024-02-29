import { z } from "zod";

export const MessageSchema = z.object({
  id: z.string(),
  text: z.string(),
  isUserMessage: z.boolean(),
});

// array validator
export const MessageArraySchema = MessageSchema.array().refine(data => data !== undefined, { message: "Required" });

export type Message = z.infer<typeof MessageSchema>;
