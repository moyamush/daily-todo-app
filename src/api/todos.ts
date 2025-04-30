import { apiClient } from "@/lib/api/api-client";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// リクエストインターフェース
export interface TodosRequest {
  // 日付
  date: string;
}

// レスポンスインターフェース
export interface TodosResponse {
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

// Todoの取得
export const getTodos = async (
  params: TodosRequest,
): Promise<TodosResponse[]> => {
  return await apiClient.get(`${baseURL}/todos`, {
    params,
  });
};
