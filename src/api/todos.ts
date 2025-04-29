import { apiClient } from "@/lib/api/api-client";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// リクエストインターフェース
export interface TodosRequest {
  id: string;
}

export const getTodos = async (params: TodosRequest) => {
  return await apiClient.get(`${baseURL}/todos`, {
    params: { params },
  });
};
