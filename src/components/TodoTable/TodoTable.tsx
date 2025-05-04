"use client";
import EditTodo from "../EditTodo/EditTodo";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useTodoTable } from "./useTodoTable";
/**
 * TODOテーブルコンポーネント
 */
export function TodoTable() {
  // TODO一覧
  const { todos } = useTodoTable();

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
        {todos.length > 0 &&
          todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.taskName}</TableCell>
              <TableCell>{todo.tag}</TableCell>
              <TableCell>{todo.duration}分</TableCell>
              <TableCell>{todo.status}</TableCell>
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
