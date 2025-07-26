import { useDeleteTodo } from "./use-delete-todo";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

/**
 * TODO削除コンポーネントインターフェース
 */
interface DeleteTodoProps {
  taskId: string;
  onDeleted?: (date: Date) => Promise<void>;
}

/**
 * TODO削除コンポーネント
 */
export function DeleteTodo({ taskId, onDeleted }: DeleteTodoProps) {
  const { handleDeleteTodo, deleteOpen, handleDeleteOpenChange } =
    useDeleteTodo();

  return (
    <Dialog open={deleteOpen} onOpenChange={handleDeleteOpenChange}>
      <DialogTrigger asChild>
        <Button>削除</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>タスクの削除</DialogTitle>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              閉じる
            </Button>
          </DialogClose>
          <Button onClick={() => handleDeleteTodo(taskId, onDeleted)}>
            削除
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
