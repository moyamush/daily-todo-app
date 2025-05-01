import { useForm } from "react-hook-form";
import { editTodoSchema, EditTodoSchema } from "./EditTodoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SelectOption } from "../SelectField/SelectField";

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

  // タグ一覧の取得
  const [tags, setTags] = useState<SelectOption[]>([]);

  // タグの設定
  useEffect(() => {
    setTags([
      { label: "test1", value: "test1" },
      { label: "test2", value: "test2" },
      { label: "test3", value: "test3" },
      { label: "test4", value: "test4" },
      { label: "test5", value: "test5" },
    ]);
  }, []);

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
    tags,
    handleEditTodo,
    editOpen,
    handleEditOpenChange,
  };
};
