import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Invalid work email address"),
  companyName: z.string().min(1, "Company name is required"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
