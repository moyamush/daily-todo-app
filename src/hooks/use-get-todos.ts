import {
  getTodos,
  GetTodosRequest,
  GetTodosResponse,
} from "@/api/todo/get-todos";
import { format } from "date-fns";
import { useCallback, useState } from "react";

/**
 * TODOの取得
 */
export default function useGetTodos() {
  // タスク一覧
  const [todos, setTodos] = useState<GetTodosResponse[]>([]);

  const handleFetchTodo = useCallback(async (selectedDate: Date) => {
    try {
      const req: GetTodosRequest = {
        date: format(selectedDate, "yyyy-MM-dd"),
      };
      const res = await getTodos(req);
      setTodos(res);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    todos,
    handleFetchTodo,
  };
}
