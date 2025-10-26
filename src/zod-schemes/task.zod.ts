import z from "zod";

export const TaskSchema = z.object({
  title: z.string().min(1, "Title id required"),
  due_date: z.string().min(1, "Due date must be in the future"),
});
