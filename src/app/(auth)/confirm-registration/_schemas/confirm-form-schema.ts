import { z } from "zod";

/**
 * 確認コードフォーム
 */
export const confirmCodeSchema = z.object({
  code: z.string().min(6, {
    message: "確認コードを入力してください",
  }),
});

export type ConfirmCodeSchema = z.infer<typeof confirmCodeSchema>;
