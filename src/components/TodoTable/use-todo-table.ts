import { getTodos, TodosRequest, TodosResponse } from "@/api/todo/todos";
import { useAppStore } from "@/providers/store-provider";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";

/**
 * TODO一覧カスタムフック
 */
export const useTodoTable = () => {
  // 選択中の日付
  const { selectedDate } = useAppStore((state) => state);
  // タスク一覧
  const [todos, setTodos] = useState<TodosResponse[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const req: TodosRequest = {
        date: format(selectedDate, "yyyy-MM-dd"),
      };
      const res = await getTodos(req);
      setTodos(res);
    } catch (err) {
      console.log(err);
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    todos,
  };
};
