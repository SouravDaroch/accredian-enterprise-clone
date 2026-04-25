"use server";

import { leadSchema, LeadFormData } from "@/lib/schemas";

export async function submitLead(data: LeadFormData) {
  // Validate the data on the server
  const result = leadSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("New Lead Captured:", result.data);

  // In a real app, you would save this to a database (e.g., Prisma, Supabase)
  return { success: true, message: "Thank you! We will get in touch soon." };
}
