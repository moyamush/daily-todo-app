import { useForm } from "react-hook-form";
import { createTodoSchema, CreateTodoSchema } from "./create-todo-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodo, CreateTodoRequest } from "@/api/todo/create-todo";
import { useAppStore } from "@/providers/store-provider";
import { format } from "date-fns";
import useGetTags from "@/hooks/use-get-tags";
import { useState } from "react";
import useGetStatuses from "@/hooks/use-get-statuses";

/**
 * TODO追加カスタムフック
 */
export const useCreateTodo = () => {
  // 選択中の日付
  const { selectedDate } = useAppStore((state) => state);
  // タグ一覧
  const { tagOptions } = useGetTags();
  // ステータス一覧の取得
  const { statusOptions } = useGetStatuses();

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
  const handleCreateTodo = async (formData: CreateTodoSchema) => {
    try {
      const req: CreateTodoRequest = {
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        taskName: formData.taskName,
        tag: formData.tag,
        duration: formData.duration,
        status: formData.status,
      };
      await createTodo(req);
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
