import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodoSchema, EditTodoSchema } from "./edit-todo-schema";
import useGetTags from "@/hooks/use-get-tags";
import { useState } from "react";

/**
 * TODO編集カスタムフック
 */
export const useEditTodo = () => {
  // タグ一覧
  const { tagOptions } = useGetTags();

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
    handleEditTodo,
    editOpen,
    handleEditOpenChange,
  };
};
