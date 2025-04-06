import { z } from "zod";

/**
 * ログインフォーム
 */
export const loginFormSchema = z.object({
  loginId: z.string().min(1, {
    message: "ログインIDを入力してください",
  }),
  password: z.string().min(1, {
    message: "パスワードを入力してください",
  }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
