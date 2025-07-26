import {
  getTodos,
  GetTodosRequest,
  GetTodosResponse,
} from "@/api/todo/get-todos";
import { useUserStore } from "@/stores/user-store";
import { format } from "date-fns";
import { useCallback, useState } from "react";

/**
 * TODOの取得
 */
export default function useGetTodos() {
  // タスク一覧
  const [todos, setTodos] = useState<GetTodosResponse[]>([]);
  // ログイン中のユーザ
  const user = useUserStore((state) => state.user);

  // TODO取得
  const handleFetchTodo = useCallback(
    async (selectedDate: Date) => {
      if (!user) return;
      try {
        const req: GetTodosRequest = {
          userId: user?.getUsername() ?? "",
          date: format(selectedDate, "yyyy-MM-dd"),
        };
        const res = await getTodos(req);
        setTodos(res);
      } catch (err) {
        console.error(err);
      }
    },
    [user],
  );

  return {
    todos,
    handleFetchTodo,
  };
}
