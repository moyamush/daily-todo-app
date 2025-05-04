import { TodosResponse } from "@/api/todo/todos";
import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// todos一覧取得のモックAPI
export const todoHandler = [
  http.get(`${baseURL}/todos`, ({ request }) => {
    const url = new URL(request.url);
    const date = url.searchParams.get("date");
    return HttpResponse.json(todosMockData[date ?? ""]);
  }),
];

export const todosMockData: Record<string, TodosResponse[]> = {
  "20250428": [
    {
      id: 1,
      taskName: "Next.js 勉強",
      tag: "プログラミング",
      duration: 60,
      status: "未処理",
    },
    {
      id: 2,
      taskName: "React 書籍読破",
      tag: "読書",
      duration: 45,
      status: "処理中",
    },
    {
      id: 3,
      taskName: "ジムでトレーニング",
      tag: "運動",
      duration: 90,
      status: "完了",
    },
    {
      id: 4,
      taskName: "スーパーで買い物",
      tag: "買い物",
      duration: 30,
      status: "保留",
    },
  ],
  "20250429": [
    {
      id: 5,
      taskName: "AWS Lambdaハンズオン",
      tag: "プログラミング",
      duration: 120,
      status: "未処理",
    },
    {
      id: 6,
      taskName: "技術書典の準備",
      tag: "読書",
      duration: 60,
      status: "処理中",
    },
    {
      id: 7,
      taskName: "ジョギング5km",
      tag: "運動",
      duration: 50,
      status: "完了",
    },
    {
      id: 8,
      taskName: "日用品の買い出し",
      tag: "買い物",
      duration: 40,
      status: "保留",
    },
  ],
  "20250430": [
    {
      id: 9,
      taskName: "TypeScript 勉強",
      tag: "プログラミング",
      duration: 75,
      status: "未処理",
    },
    {
      id: 10,
      taskName: "新しい本購入",
      tag: "読書",
      duration: 20,
      status: "処理中",
    },
    {
      id: 11,
      taskName: "ストレッチ30分",
      tag: "運動",
      duration: 30,
      status: "完了",
    },
    {
      id: 12,
      taskName: "ディスカウントショップ巡り",
      tag: "買い物",
      duration: 60,
      status: "保留",
    },
  ],
  "20250501": [
    {
      id: 13,
      taskName: "Serverless Framework 勉強",
      tag: "プログラミング",
      duration: 90,
      status: "未処理",
    },
    {
      id: 14,
      taskName: "読書（ビジネス書）",
      tag: "読書",
      duration: 40,
      status: "処理中",
    },
    {
      id: 15,
      taskName: "ジムで筋トレ",
      tag: "運動",
      duration: 70,
      status: "完了",
    },
    {
      id: 16,
      taskName: "ドラッグストア買い物",
      tag: "買い物",
      duration: 25,
      status: "保留",
    },
  ],
  "20250502": [
    {
      id: 17,
      taskName: "Docker学習",
      tag: "プログラミング",
      duration: 80,
      status: "未処理",
    },
    {
      id: 18,
      taskName: "小説読書",
      tag: "読書",
      duration: 35,
      status: "処理中",
    },
    {
      id: 19,
      taskName: "ランニング10km",
      tag: "運動",
      duration: 100,
      status: "完了",
    },
    {
      id: 20,
      taskName: "ホームセンター買い出し",
      tag: "買い物",
      duration: 45,
      status: "保留",
    },
  ],
  "20250503": [
    {
      id: 21,
      taskName: "API設計の見直し",
      tag: "プログラミング",
      duration: 95,
      status: "未処理",
    },
    {
      id: 22,
      taskName: "技術ブログ読む",
      tag: "読書",
      duration: 30,
      status: "処理中",
    },
    {
      id: 23,
      taskName: "ヨガレッスン",
      tag: "運動",
      duration: 60,
      status: "完了",
    },
    {
      id: 24,
      taskName: "ネットスーパー注文",
      tag: "買い物",
      duration: 20,
      status: "保留",
    },
  ],
  "20250504": [
    {
      id: 25,
      taskName: "Next.js でブログ作成",
      tag: "プログラミング",
      duration: 100,
      status: "未処理",
    },
    {
      id: 26,
      taskName: "本屋で立ち読み",
      tag: "読書",
      duration: 25,
      status: "処理中",
    },
    {
      id: 27,
      taskName: "エアロビクス参加",
      tag: "運動",
      duration: 55,
      status: "完了",
    },
    {
      id: 28,
      taskName: "アウトレットモール",
      tag: "買い物",
      duration: 120,
      status: "保留",
    },
  ],
};
