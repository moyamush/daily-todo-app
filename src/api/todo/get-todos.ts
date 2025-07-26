import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/get-todos`;

// リクエストインターフェース
export interface GetTodosRequest {
  // 日付
  date: string;
}

// レスポンスインターフェース
export interface GetTodosResponse {
  // id
  id: number;
  // タスク名
  taskName: string;
  // タグ
  tag: string;
  // 所要時間
  duration: string;
  // ステータス
  status: string;
}

// Todo一覧の取得
export const getTodos = async (
  params: GetTodosRequest,
): Promise<GetTodosResponse[]> => {
  console.log("called get todo");
  return await apiClient.get(RESOUECE, {
    params,
  });
};
