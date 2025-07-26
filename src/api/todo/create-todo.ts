import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/create-todo`;

// リクエストインターフェース
export interface CreateTodoRequest {
  // ユーザID
  userId: string;
  // 選択した日付
  selectedDate: string;
  // タスク名
  taskName: string;
  // タグ
  tag: string;
  // 所要時間
  duration: string;
  // ステータス
  status: string;
}

// レスポンスインターフェース
export interface CreateTodoResponse {
  // id
  id: string;
}

// Todoの追加
export const createTodo = async (
  params: CreateTodoRequest,
): Promise<CreateTodoResponse[]> => {
  return await apiClient.post(RESOUECE, params);
};
