import { Meta, StoryObj } from "@storybook/nextjs";
import { TodoTable } from "./TodoTable";
import { http, HttpResponse } from "msw";
import { GetTagsResponse } from "@/api/tag/get-tags";
import { GetTodosResponse } from "@/api/todo/get-todos";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const meta = {
  component: TodoTable,
  title: "Components/TodoTable",
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseURL}/get-todos`, ({ request }) => {
          const url = new URL(request.url);
          const date = url.searchParams.get("date");
          console.log(date);
          return HttpResponse.json(todosMockData["2025-04-28"]);
        }),

        http.get(`${baseURL}/get-tags`, () => {
          return HttpResponse.json(tagsMockData);
        }),
      ],
    },
  },
} satisfies Meta<typeof TodoTable>;

export default meta;
type Story = StoryObj<typeof TodoTable>;
export const Default: Story = {};

const tagsMockData: GetTagsResponse[] = [
  { id: "1", tagName: "プログラミング", tagColor: "bg-blue-100", sort: 1 },
  { id: "2", tagName: "読書", tagColor: "bg-yellow-100", sort: 2 },
  { id: "3", tagName: "運動", tagColor: "bg-green-100", sort: 3 },
  { id: "4", tagName: "料理", tagColor: "bg-pink-100", sort: 4 },
];

export const todosMockData: Record<string, GetTodosResponse[]> = {
  "2025-04-28": [
    {
      id: 1,
      taskName: "Next.js 勉強",
      tag: "1",
      duration: "60",
      status: "未処理",
    },
    {
      id: 2,
      taskName: "React 書籍読破",
      tag: "2",
      duration: "45",
      status: "処理中",
    },
    {
      id: 3,
      taskName: "ジムでトレーニング",
      tag: "3",
      duration: "90",
      status: "完了",
    },
    {
      id: 4,
      taskName: "スーパーで買い物",
      tag: "4",
      duration: "30",
      status: "保留",
    },
  ],
  "2025-04-29": [
    {
      id: 5,
      taskName: "AWS Lambdaハンズオン",
      tag: "1",
      duration: "120",
      status: "未処理",
    },
    {
      id: 6,
      taskName: "技術書典の準備",
      tag: "2",
      duration: "60",
      status: "処理中",
    },
    {
      id: 7,
      taskName: "ジョギング5km",
      tag: "3",
      duration: "50",
      status: "完了",
    },
    {
      id: 8,
      taskName: "日用品の買い出し",
      tag: "4",
      duration: "40",
      status: "保留",
    },
  ],
  "2025-04-30": [
    {
      id: 9,
      taskName: "TypeScript 勉強",
      tag: "1",
      duration: "75",
      status: "未処理",
    },
    {
      id: 10,
      taskName: "新しい本購入",
      tag: "2",
      duration: "20",
      status: "処理中",
    },
    {
      id: 11,
      taskName: "ストレッチ30分",
      tag: "3",
      duration: "30",
      status: "完了",
    },
    {
      id: 12,
      taskName: "ディスカウントショップ巡り",
      tag: "4",
      duration: "60",
      status: "保留",
    },
  ],
};
