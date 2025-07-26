import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodoSchema, EditTodoSchema } from "./edit-todo-schema";
import { useState } from "react";
import { useTagStore } from "@/stores/tag-store";
import { useStatusStore } from "@/stores/status-store";

/**
 * TODO編集カスタムフック
 */
export const useEditTodo = () => {
  // タグ一覧
  const tagOptions = useTagStore((state) => state.tagOptions);
  // ステータス一覧の取得
  const statusOptions = useStatusStore((state) => state.statusOptions);

  // フォーム初期化
  const form = useForm<EditTodoSchema>({
    resolver: zodResolver(editTodoSchema),
    defaultValues: {
      taskName: "",
      tag: "",
      duration: "",
      status: "",
    },
  });

  // 編集ダイアログの開閉
  const [editOpen, setEditOpen] = useState<boolean>(false);

  // TODOの編集
  const handleEditTodo = (formData: EditTodoSchema) => {
    console.log(formData);

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
