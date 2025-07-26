"use client";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useEffect, useMemo } from "react";
import { GetTagsResponse } from "@/api/tag/get-tags";
import { GetStatusesResponse } from "@/api/status/get-statuses";
import { GetTodosResponse } from "@/api/todo/get-todos";
import { EditTodo } from "../EditTodo/EditTodo";
import { useTagStore } from "@/stores/tag-store";
import { useUserStore } from "@/stores/user-store";
import { useStatusStore } from "@/stores/status-store";

/**
 * TODOテーブルコンポーネントインターフェース
 */
interface TodoTableProps {
  todos: GetTodosResponse[];
}

/**
 * TODOテーブルコンポーネント
 */
export function TodoTable({ todos }: TodoTableProps) {
  const user = useUserStore((state) => state.user);

  // タグ一覧
  const tags = useTagStore((state) => state.tags);
  const fetchTags = useTagStore((state) => state.fetchTags);

  // ステータス一覧
  const statuses = useStatusStore((state) => state.statuses);
  const fetchStatuses = useStatusStore((state) => state.fetchStatuses);

  const tagMap = useMemo(() => {
    const map = new Map<string, GetTagsResponse>();
    for (const tag of tags) {
      map.set(tag.id, tag);
    }
    return map;
  }, [tags]);

  const statusMap = useMemo(() => {
    const map = new Map<string, GetStatusesResponse>();
    for (const status of statuses) {
      map.set(status.id, status);
    }
    return map;
  }, [statuses]);

  useEffect(() => {
    if (user) {
      fetchTags(user);
      fetchStatuses(user);
    }
  }, [user, fetchTags, fetchStatuses]);

  return (
    <Table>
      <TableHeader className="bg-primary text-primary-foreground h-12">
        <TableRow className="text-lg">
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
            const status = statusMap.get(todo.status);
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
                <TableCell>
                  {status && (
                    <Badge className={`p-2 ${status.statusColor} text-black`}>
                      {status.statusName}
                    </Badge>
                  )}
                </TableCell>
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
