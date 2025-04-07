import { z } from "zod";

const courseValidator = z.object({
  name: z.string().min(3, { message: "Course name must contain at least 3 characters" }),
});

const questionValidator = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long"}),
  text: z.string().min(3, { message: "Text must be at least 3 characters long"}),
});

export { courseValidator, questionValidator };