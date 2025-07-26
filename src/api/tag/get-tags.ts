import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/get-tags`;

// リクエストインターフェース
export interface GetTagsRequest {
  // ユーザID
  userId: string;
}

// レスポンスインターフェース
export interface GetTagsResponse {
  // id
  id: string;
  // タグ名
  tagName: string;
  // カラー
  tagColor: string;
  // ソート
  sort: number;
}

// タグ一覧の取得
export const getTags = async (
  request: GetTagsRequest,
): Promise<GetTagsResponse[]> => {
  console.log("called get tags");
  return await apiClient.get(RESOUECE, { params: request });
};
