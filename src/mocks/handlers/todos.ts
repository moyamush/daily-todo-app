import { http, HttpResponse } from "msw";

// ベースURL
const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// todosのモックAPI
export const todoHandler = [
  http.get(`${baseURL}/todos`, () => {
    return HttpResponse.json([{ id: "1", name: "test" }]);
  }),
];
