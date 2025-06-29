import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/get-statuses`;

// リクエストインターフェース
export interface GetStatusesRequest {
  // ユーザID
  userId: string;
}

// レスポンスインターフェース
export interface GetStatusesResponse {
  // id
  id: string;
  // ステータス名
  statusName: string;
  // カラー
  statusColor: string;
  // ソート
  sort: number;
}

// ステータス一覧の取得
export const getStatuses = async (
  request: GetStatusesRequest,
): Promise<GetStatusesResponse[]> => {
  return await apiClient.get(RESOUECE, { params: request });
};
