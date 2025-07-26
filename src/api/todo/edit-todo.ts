import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/edit-todo`;

// リクエストインターフェース
export interface EditTodoRequest {
  // ユーザID
  userId: string;
  // 選択中の日付
  selectedDate: string;
  // タスクID
  taskId: string;
  // タスク名
  taskName: string;
  // タグ
  tag: string;
  // 所要時間
  duration: number;
  // ステータス
  status: string;
}

// レスポンスインターフェース
export interface EditTodoResponse {
  // id
  id: number;
}

// Todoの編集
export const editTodo = async (
  params: EditTodoRequest,
): Promise<EditTodoResponse[]> => {
  return await apiClient.post(RESOUECE, params);
};
