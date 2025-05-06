"use client";
import useGetTags from "@/hooks/use-get-tags";
import EditTodo from "../EditTodo/EditTodo";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useTodoTable } from "./use-todo-table";
import { TagsResponse } from "@/api/tag/tags";
import { Badge } from "../ui/badge";
import { useMemo } from "react";
/**
 * TODOテーブルコンポーネント
 */
export function TodoTable() {
  // TODO一覧
  const { todos } = useTodoTable();
  // タグ一覧
  const { tags } = useGetTags();

  const tagMap = useMemo(() => {
    const map = new Map<string, TagsResponse>();
    for (const tag of tags) {
      map.set(tag.id, tag);
    }
    return map;
  }, [tags]);

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
          todos.map((todo) => {
            const tag = tagMap.get(todo.tag);
            return (
              <TableRow key={todo.id}>
                <TableCell>{todo.taskName}</TableCell>
                <TableCell>
                  {tag && (
                    <Badge className={`p-2 ${tag.tagColor} text-black`}>
                      {tag.tagName}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{todo.duration}分</TableCell>
                <TableCell>{todo.status}</TableCell>
                <TableCell className="flex gap-2">
                  <EditTodo />
                  <Button>削除</Button>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
