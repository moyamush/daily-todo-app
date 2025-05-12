import { GetStatusesResponse } from "@/api/status/get-statuses";
import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// ステータス一覧取得のモックAPI
export const statusHandler = [
  http.get(`${baseURL}/get-statuses`, () => {
    return HttpResponse.json(statusesMockData);
  }),
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
