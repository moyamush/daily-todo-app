import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodoSchema, EditTodoSchema } from "./edit-todo-schema";
import { useState } from "react";
import { useTagStore } from "@/stores/tag-store";
import { useStatusStore } from "@/stores/status-store";
import { useUserStore } from "@/stores/user-store";
import { editTodo, EditTodoRequest } from "@/api/todo/edit-todo";
import { GetTodosResponse } from "@/api/todo/get-todos";
import { useSelectedDateStore } from "@/stores/selected-date-store";
import { format } from "date-fns";

/**
 * TODO編集カスタムフック
 */
export const useEditTodo = (todo: GetTodosResponse) => {
  // ログイン中のユーザ
  const user = useUserStore((state) => state.user);
  // 選択中の日付
  const selectedDate = useSelectedDateStore((state) => state.selectedDate);
  // タグ一覧
  const tagOptions = useTagStore((state) => state.tagOptions);
  // ステータス一覧の取得
  const statusOptions = useStatusStore((state) => state.statusOptions);

  // フォーム初期化
  const form = useForm<EditTodoSchema>({
    resolver: zodResolver(editTodoSchema),
    defaultValues: {
      taskName: todo.taskName,
      tag: todo.tag,
      duration: todo.duration,
      status: todo.status,
    },
  });

  // 編集ダイアログの開閉
  const [editOpen, setEditOpen] = useState<boolean>(false);

  // TODOの編集
  const handleEditTodo = async (
    formData: EditTodoSchema,
    onEdited?: (date: Date) => Promise<void>,
  ) => {
    try {
      const request: EditTodoRequest = {
        userId: user?.getUsername() ?? "",
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        taskId: todo.id,
        taskName: formData.taskName,
        tag: formData.tag,
        duration: Number(formData.duration),
        status: formData.status,
      };

      const res = await editTodo(request);
      await onEdited?.(selectedDate);
    } catch (err) {
      console.log(err);
    }
    // 編集ダイアログを閉じる
    setEditOpen(false);
  };

  // ダイアログ開閉時の処理
  const handleEditOpenChange = () => {
    // フォームを初期化
    form.reset();

    // 編集ダイアログの開閉
    if (editOpen) {
      setEditOpen(false);
    } else {
      setEditOpen(true);
    }
  };

  return {
    form,
    tagOptions,
    statusOptions,
    handleEditTodo,
    editOpen,
    handleEditOpenChange,
  };
};
