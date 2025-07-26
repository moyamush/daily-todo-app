import { GetTodosResponse } from "@/api/todo/get-todos";
import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const todoHandler = [
  // todos一覧取得のモックAPI
  http.get(`${baseURL}/get-todos`, ({ request }) => {
    const url = new URL(request.url);
    const date = url.searchParams.get("date");
    return HttpResponse.json(todosMockData[date ?? ""]);
  }),
];

export const todosMockData: Record<string, GetTodosResponse[]> = {
  "2025-07-26": [
    {
      id: 1,
      taskName: "Next.js 勉強",
      tag: "1",
      duration: "60",
      status: "1",
    },
    {
      id: 2,
      taskName: "React 書籍読破",
      tag: "2",
      duration: "45",
      status: "2",
    },
    {
      id: 3,
      taskName: "ジムでトレーニング",
      tag: "3",
      duration: "90",
      status: "4",
    },
    {
      id: 4,
      taskName: "スーパーで買い物",
      tag: "4",
      duration: "30",
      status: "3",
    },
  ],
  "2025-04-29": [
    {
      id: 5,
      taskName: "AWS Lambdaハンズオン",
      tag: "1",
      duration: "120",
      status: "1",
    },
    {
      id: 6,
      taskName: "技術書典の準備",
      tag: "2",
      duration: "60",
      status: "2",
    },
    {
      id: 7,
      taskName: "ジョギング5km",
      tag: "3",
      duration: "50",
      status: "4",
    },
    {
      id: 8,
      taskName: "日用品の買い出し",
      tag: "4",
      duration: "40",
      status: "3",
    },
  ],
  "2025-04-30": [
    {
      id: 9,
      taskName: "TypeScript 勉強",
      tag: "1",
      duration: "75",
      status: "1",
    },
    {
      id: 10,
      taskName: "新しい本購入",
      tag: "2",
      duration: "20",
      status: "2",
    },
    {
      id: 11,
      taskName: "ストレッチ30分",
      tag: "3",
      duration: "30",
      status: "4",
    },
    {
      id: 12,
      taskName: "ディスカウントショップ巡り",
      tag: "4",
      duration: "60",
      status: "3",
    },
  ],
};
