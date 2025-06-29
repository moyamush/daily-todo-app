import { z } from "zod";

/**
 * パスワード変更フォーム
 */
export const newChangePasswordSchema = z.object({
  password: z.string().min(1, {
    message: "パスワードを入力してください",
  }),
});

export type NewChangePasswordSchema = z.infer<typeof newChangePasswordSchema>;
