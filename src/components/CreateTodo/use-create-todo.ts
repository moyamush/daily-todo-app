import { useForm } from "react-hook-form";
import { createTodoSchema, CreateTodoSchema } from "./create-todo-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodo, CreateTodoRequest } from "@/api/todo/create-todo";
import { format } from "date-fns";
import { useState } from "react";
import { useTagStore } from "@/stores/tag-store";
import { useStatusStore } from "@/stores/status-store";

/**
 * TODO追加カスタムフック
 */
export const useCreateTodo = () => {
  // タグ一覧
  const tagOptions = useTagStore((state) => state.tagOptions);
  // ステータス一覧の取得
  const statusOptions = useStatusStore((state) => state.statusOptions);

  // フォーム初期化
  const form = useForm<CreateTodoSchema>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      taskName: "",
      tag: "",
      duration: "",
      status: "",
    },
  });

  // 追加ダイアログの開閉
  const [createOpen, setCreateOpen] = useState<boolean>(false);

  // TODOの追加
  const handleCreateTodo = async (
    selectedDate: Date,
    formData: CreateTodoSchema,
    onCreated?: (date: Date) => void,
  ) => {
    try {
      const req: CreateTodoRequest = {
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        taskName: formData.taskName,
        tag: formData.tag,
        duration: formData.duration,
        status: formData.status,
      };
      await createTodo(req);
      onCreated?.(selectedDate);
    } catch (err) {
      console.error(err);
    }

    // 追加ダイアログを閉じる
    setCreateOpen(false);
  };

  // ダイアログ開閉時の処理
  const handleCreateOpenChange = () => {
    // フォームを初期化
    form.reset();

    // 追加ダイアログの開閉
    if (createOpen) {
      setCreateOpen(false);
    } else {
      setCreateOpen(true);
    }
  };

  return {
    form,
    tagOptions,
    statusOptions,
    handleCreateTodo,
    createOpen,
    handleCreateOpenChange,
  };
};
