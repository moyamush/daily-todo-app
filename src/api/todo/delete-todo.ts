import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/delete-todo`;

// リクエストインターフェース
export interface DeleteTodoRequest {
  // ユーザID
  userId: string;
  // 選択中の日付
  selectedDate: string;
  // タスクID
  taskId: string;
}

// レスポンスインターフェース
export interface DeleteTodoResponse {
  // id
  id: string;
}

// Todoの削除
export const deleteTodo = async (
  params: DeleteTodoRequest,
): Promise<DeleteTodoResponse[]> => {
  return await apiClient.post(RESOUECE, params);
};
