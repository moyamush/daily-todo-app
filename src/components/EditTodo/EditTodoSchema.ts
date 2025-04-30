import { z } from "zod";

/**
 * TODO編集フォーム
 */
export const editTodoSchema = z.object({
  taskName: z.string().min(1, {
    message: "タスク名を入力してください",
  }),
  tag: z.string().min(1, {
    message: "タスを選択してください",
  }),
  duration: z.string().min(1, {
    message: "所要時間を入力してください",
  }),
  status: z.string().min(1, {
    message: "ステータスを選択してください",
  }),
});

export type EditTodoSchema = z.infer<typeof editTodoSchema>;
