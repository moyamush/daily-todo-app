import { Meta, StoryObj } from "@storybook/nextjs";
import EditTodo from "./EditTodo";
import { http, HttpResponse } from "msw";
import { GetTagsResponse } from "@/api/tag/get-tags";
import { GetStatusesResponse } from "@/api/status/get-statuses";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const meta = {
  component: EditTodo,
  title: "Components/EditTodo",
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        http.get(`${baseURL}/get-tags`, () => {
          return HttpResponse.json(tagsMockData);
        }),
        http.get(`${baseURL}/get-statuses`, () => {
          return HttpResponse.json(statusesMockData);
        }),
      ],
    },
  },
} satisfies Meta<typeof EditTodo>;

export default meta;
type Story = StoryObj<typeof EditTodo>;

export const Default: Story = {};

const tagsMockData: GetTagsResponse[] = [
  { id: "1", tagName: "プログラミング", tagColor: "bg-blue-100", sort: 1 },
  { id: "2", tagName: "読書", tagColor: "bg-yellow-100", sort: 2 },
  { id: "3", tagName: "運動", tagColor: "bg-green-100", sort: 3 },
  { id: "4", tagName: "料理", tagColor: "bg-pink-100", sort: 4 },
];

const statusesMockData: GetStatusesResponse[] = [
  {
    id: "1",
    statusName: "未処理",
    statusColor: "bg-red-100",
    sort: 1,
  },
  {
    id: "2",
    statusName: "処理中",
    statusColor: "bg-orange-100",
    sort: 2,
  },
  {
    id: "3",
    statusName: "処理済み",
    statusColor: "bg-blue-100",
    sort: 3,
  },
  {
    id: "4",
    statusName: "完了",
    statusColor: "bg-green-100",
    sort: 4,
  },
];
