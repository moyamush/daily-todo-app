import { GetTagsResponse } from "@/api/tag/get-tags";
import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// tag一覧取得のモックAPI
export const tagHandler = [
  http.get(`${baseURL}/get-tags`, () => {
    return HttpResponse.json(tagsMockData);
  }),
];

const tagsMockData: GetTagsResponse[] = [
  { id: "1", tagName: "プログラミング", tagColor: "bg-blue-100", sort: 1 },
  { id: "2", tagName: "読書", tagColor: "bg-yellow-100", sort: 2 },
  { id: "3", tagName: "運動", tagColor: "bg-green-100", sort: 3 },
  { id: "4", tagName: "料理", tagColor: "bg-pink-100", sort: 4 },
];
