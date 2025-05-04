import { apiClient } from "@/lib/api/api-client";

// リソース
const RESOUECE = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/get-tags`;

// レスポンスインターフェース
export interface TagsResponse {
  // id
  id: number;
  // タグ名
  tagName: string;
}

// Tagの取得
export const getTags = async (): Promise<TagsResponse[]> => {
  return await apiClient.get(RESOUECE);
};
