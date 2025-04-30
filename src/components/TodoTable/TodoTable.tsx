import { useCallback, useEffect, useState } from "react";
import EditTodo from "../EditTodo/EditTodo";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useAppStore } from "@/providers/store-provider";
import { getTodos, TodosRequest, TodosResponse } from "@/api/todos";
import { format } from "date-fns";

/**
 * TODOテーブルコンポーネント
 */
export function TodoTable() {
  // 選択中の日付
  const { selectedDate } = useAppStore((state) => state);
  // タスク一覧
  const [tasks, setTasks] = useState<TodosResponse[]>([]);

  const fetchData = useCallback(async () => {
    const req: TodosRequest = {
      date: format(selectedDate, "yyyyMMdd"),
    };
    const res = await getTodos(req);
    setTasks(res);
  }, [selectedDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Table>
      <TableHeader className="bg-primary text-primary-foreground">
        <TableRow>
          <TableCell>タスク名</TableCell>
          <TableCell>タグ</TableCell>
          <TableCell>所要時間</TableCell>
          <TableCell>ステータス</TableCell>
          <TableCell>操作</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.taskName}</TableCell>
              <TableCell>{task.tag}</TableCell>
              <TableCell>{task.duration}分</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell className="flex gap-2">
                <EditTodo />
                <Button>削除</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
