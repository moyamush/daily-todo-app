import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/edit-todo`;

// リクエストインターフェース
export interface EditTodoRequest {
  // id
  id: number;
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
export const editTodos = async (
  params: EditTodoRequest,
): Promise<EditTodoResponse[]> => {
  return await apiClient.post(RESOUECE, params);
};
