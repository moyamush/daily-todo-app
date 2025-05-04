import { TagsResponse } from "@/api/tag/tags";
import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// tag一覧取得のモックAPI
export const tagHandler = [
  http.get(`${baseURL}/tags`, () => {
    return HttpResponse.json(tagsMockData);
  }),
];

const tagsMockData: TagsResponse[] = [
  { id: 1, tagName: "プログラミング" },
  { id: 2, tagName: "読書" },
  { id: 3, tagName: "運動" },
  { id: 4, tagName: "買い物" },
];
