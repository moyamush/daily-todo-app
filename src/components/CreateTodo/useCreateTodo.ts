import { useForm } from "react-hook-form";
import { createTodoSchema, CreateTodoSchema } from "./createTodoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { SelectOption } from "../SelectField/SelectField";
import { getTags } from "@/api/tag/tags";
import { createTodo, CreateTodoRequest } from "@/api/todo/create-todo";
import { useAppStore } from "@/providers/store-provider";
import { format } from "date-fns";

/**
 * TODO追加カスタムフック
 */
export const useCreateTodo = () => {
  // 選択中の日付
  const { selectedDate } = useAppStore((state) => state);

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

  // 追加ダイアログの開閉
  const [createOpen, setCreateOpen] = useState<boolean>(false);

  // TODOの追加
  const handleCreateTodo = async (formData: CreateTodoSchema) => {
    console.log(formData);
    try {
      const req: CreateTodoRequest = {
        selectedDate: format(selectedDate, "yyyy-MM-dd"),
        taskName: formData.taskName,
        tag: formData.tag,
        duration: formData.duration,
        status: formData.status,
      };
      const res = await createTodo(req);
    } catch (err) {}

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
    tags,
    handleCreateTodo,
    createOpen,
    handleCreateOpenChange,
  };
};
