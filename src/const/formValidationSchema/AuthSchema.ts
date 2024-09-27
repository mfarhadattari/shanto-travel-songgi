import { z } from "zod";

const userRegisterSchema = z
  .object({
    username: z.string({
      required_error: "Please provide user name.",
    }),
    email: z.string().email({ message: "Please provide valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters." }),
    file: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

const userLoginSchema = z.object({
  email: z.string().email({ message: "Please provide valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const forgetPasswordSchema = z.object({
  email: z.string().email({ message: "Please provide valid email." }),
});

export const AuthSchema = {
  userRegisterSchema,
  userLoginSchema,
  forgetPasswordSchema,
};
