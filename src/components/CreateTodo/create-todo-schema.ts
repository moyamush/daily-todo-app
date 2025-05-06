import { z } from "zod";

/**
 * TODO追加フォーム
 */
export const createTodoSchema = z.object({
  taskName: z.string().min(1, {
    message: "タスク名を入力してください",
  }),
  tag: z.string().min(1, {
    message: "タグを選択してください",
  }),
  duration: z.string().min(1, {
    message: "所要時間を入力してください",
  }),
  status: z.string().min(1, {
    message: "ステータスを選択してください",
  }),
});

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
