import { useForm } from "react-hook-form";
import { editTodoSchema, EditTodoSchema } from "./EditTodoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

/**
 * TODO編集カスタムフック
 */
export const useEditTodo = () => {
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

  return {
    form,
    handleEditTodo,
    editOpen,
    setEditOpen,
  };
};
