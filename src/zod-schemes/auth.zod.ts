import z from "zod";

export const AuthSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(8, "Password is required"),
});
