import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { SelectOption } from "../SelectField/SelectField";
import { getTags } from "@/api/tag/tags";
import { editTodoSchema, EditTodoSchema } from "./editTodoSchema";

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

  // タグ一覧
  const [tags, setTags] = useState<SelectOption[]>([]);
  // タグ一覧取得
  const fetchTags = useCallback(async () => {
    try {
      const res = await getTags();
      setTags(
        res.map((item) => {
          return { label: item.tagName, value: item.id.toString() };
        }),
      );
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

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
