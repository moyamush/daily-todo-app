import { deleteTodo, DeleteTodoRequest } from "@/api/todo/delete-todo";
import { useSelectedDateStore } from "@/stores/selected-date-store";
import { useUserStore } from "@/stores/user-store";
import { format } from "date-fns";
import { useState } from "react";

/**
 * TODO削除カスタムフック
 */
export const useDeleteTodo = () => {
  // ログイン中のユーザ
  const user = useUserStore((state) => state.user);
  // 選択中の日付
  const selectedDate = useSelectedDateStore((state) => state.selectedDate);

  // 削除ダイアログの開閉
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  const handleDeleteTodo = async (
    taskId: string,
    onDeleted?: (date: Date) => Promise<void>,
  ) => {
    try {
      const request: DeleteTodoRequest = {
        userId: user?.getUsername() ?? "",
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        taskId: taskId,
      };
      const res = await deleteTodo(request);
      await onDeleted?.(selectedDate);
    } catch (err) {
      console.error(err);
    }

    // 削除ダイアログを閉じる
    setDeleteOpen(false);
  };

  const handleDeleteOpenChange = () => {
    if (deleteOpen) {
      setDeleteOpen(false);
    } else {
      setDeleteOpen(true);
    }
  };

  return {
    handleDeleteTodo,
    deleteOpen,
    handleDeleteOpenChange,
  };
};
