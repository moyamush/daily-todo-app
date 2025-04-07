import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

/**
 * タスクインターフェース
 */
export interface Task {
  // id
  id: number;
  // タスク名
  taskName: string;
  // タグ
  tag: string;
  // 所要時間
  duration: number;
  // ステータス
  status: string;
}

interface TodoTableProps {
  // タスク一覧
  tasks: Task[];
}

/**
 * TODOテーブルコンポーネント
 */
export function TodoTable({ tasks }: TodoTableProps) {
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
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.taskName}</TableCell>
            <TableCell>{task.tag}</TableCell>
            <TableCell>{task.duration}分</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell>
              <Button>編集</Button>
              <Button>削除</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
